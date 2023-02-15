package com.escola.auth.application.domain.entities;

import com.escola.auth.application.domain.entities.errors.InvalidPasswordException;
import com.escola.auth.application.domain.entities.errors.InvalidUsernameException;
import com.escola.auth.application.domain.errors.ValidationError;
import com.escola.auth.application.domain.errors.ValidationError.ErrorType;
import com.escola.auth.shared.Either;

public class User {
  public Username username;
  public Password password;

  private User(Username username, Password password) {
    this.username = username;
    this.password = password;
  }

  public static Either<ValidationError, User> create(String username, String password) throws InvalidUsernameException, InvalidPasswordException {
    Either<InvalidUsernameException, Username> usernameOrError = Username.create(username);
    Either<InvalidPasswordException, Password> passwordOrError = Password.create(password);
    if(usernameOrError.isLeft()) {
      return Either.left(new ValidationError(
        ErrorType.INVALID_USERNAME,
        usernameOrError.getLeft().getMessage()
      ));
    }
    if(passwordOrError.isLeft()) {
      return Either.left(new ValidationError(
        ErrorType.INVALID_PASSWORD,
        passwordOrError.getLeft().getMessage()
      ));
    }
    return Either.right(new User(usernameOrError.getRight(), passwordOrError.getRight()));
  }

}
