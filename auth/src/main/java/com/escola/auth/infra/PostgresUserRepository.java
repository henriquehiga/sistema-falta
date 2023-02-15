package com.escola.auth.infra;
import com.escola.auth.application.domain.entities.Password;
import com.escola.auth.application.domain.entities.User;
import com.escola.auth.application.domain.entities.Username;
import com.escola.auth.application.domain.entities.errors.InvalidPasswordException;
import com.escola.auth.application.domain.entities.errors.InvalidUsernameException;
import com.escola.auth.application.domain.errors.ValidationError;
import com.escola.auth.application.domain.errors.ValidationError.ErrorType;
import com.escola.auth.infra.ports.UserRepository;
import com.escola.auth.shared.Either;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Value;

public class PostgresUserRepository implements UserRepository {

    private static final String INSERT_QUERY = "INSERT INTO \"sistema-falta\".auth (username, password) VALUES (?, ?)";
    private static final String FIND_BY_USERNAME_QUERY = "SELECT username, password FROM \"sistema-falta\".auth WHERE username = ?";
    private static final String EXISTS_QUERY = "SELECT COUNT(*) FROM \"sistema-falta\".auth WHERE username = ?";

    @Value("${spring.datasource.username}")
    private String userConnection;

    @Value("${spring.datasource.password}")
    private String passConnection;

    @Value("${spring.datasource.url}")
    private String urlConnection;

    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection("jdbc:postgresql://localhost:32768/dev?schema=sistema-falta", "postgres", "postgrespw");
    }

    @Override
    public Either<ValidationError, User> save(User user) {
        try (Connection conn = getConnection()) {
            PreparedStatement statement = conn.prepareStatement(INSERT_QUERY);
            statement.setString(1, user.username.value);
            statement.setString(2, user.password.value);
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected == 1) {
                return Either.right(user);
            } else {
                return Either.left(new ValidationError(ErrorType.PERSIST_ERROR, "O usuário não foi registrado"));
            }
        } catch (SQLException e) {
            return Either.left(new ValidationError(ErrorType.PERSIST_ERROR, "Erro ao registrar usuário"));
        }
    }

    @Override
    public User findByUsername(String username) {
        try (Connection conn = getConnection()) {
            PreparedStatement statement = conn.prepareStatement(FIND_BY_USERNAME_QUERY);
            statement.setString(1, username);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                Either<InvalidUsernameException, Username> usernameOrError = Username.create(resultSet.getString("username"));
                if(usernameOrError.isLeft()) {
                    throw new Error(usernameOrError.getLeft().getMessage());
                }
                Either<InvalidPasswordException, Password> passwordOrError = Password.create(resultSet.getString("password"));
                if(passwordOrError.isLeft()) {
                    throw new Error(passwordOrError.getLeft().getMessage());
                }
                Either<ValidationError, User> userOrError = User.create(usernameOrError.getRight().value, passwordOrError.getRight().value);
                if(userOrError.isLeft()) {
                    throw new Error(userOrError.getLeft().getMessage());
                }
                return userOrError.getRight();
            } else {
                return null;
            }
        } catch (SQLException e) {
            return null;
        }
    }

    @Override
    public boolean exists(String username) {
        try (Connection conn = getConnection()) {
            PreparedStatement statement = conn.prepareStatement(EXISTS_QUERY);
            statement.setString(1, username);
            ResultSet resultSet = statement.executeQuery();
            resultSet.next();
            int count = resultSet.getInt(1);
            return count > 0;
        } catch (SQLException e) {
            return false;
        }
    }
}
