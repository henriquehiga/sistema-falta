package com.escola.auth.application.usecases;

import com.escola.auth.shared.dto.CreateNewUserDTO;
import com.escola.auth.application.domain.entities.Password;
import com.escola.auth.application.domain.entities.User;
import com.escola.auth.application.domain.errors.ValidationError;
import com.escola.auth.infra.errors.UsernameAlreadyExistsException;
import com.escola.auth.infra.ports.UserRepository;
import com.escola.auth.shared.Either;

public class RegisterUser {
  private UserRepository userRepository;

  public RegisterUser(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  public Either<ValidationError, User> execute(CreateNewUserDTO createNewUser) {
    String hashedPassword = Password.hashPassword(createNewUser.getPassword());
    Either<ValidationError, User> user = User.create(createNewUser.getUsername(), hashedPassword);
    if(user.isLeft()) {
      return Either.left(user.getLeft());
    }
    Boolean userExists = this.userRepository.exists(createNewUser.getUsername());
    if(userExists) {
      return Either.left(new ValidationError(ValidationError.ErrorType.USER_ALREADY_EXIST, new UsernameAlreadyExistsException().getMessage()));
    }
    Either<ValidationError, User> response = this.userRepository.save(user.getRight());
    if(response.isLeft()) {
      return Either.left(response.getLeft());
    }
    return Either.right(user.getRight());
  }
}
