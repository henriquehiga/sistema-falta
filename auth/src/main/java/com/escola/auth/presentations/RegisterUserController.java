package com.escola.auth.presentations;

import com.escola.auth.shared.dto.CreateNewUserDTO;
import com.escola.auth.application.usecases.RegisterUser;
import com.escola.auth.presentations.helpers.Created;
import com.escola.auth.presentations.helpers.Unauthorized;
import com.escola.auth.presentations.ports.HttpResponse;
import com.escola.auth.application.domain.entities.User;
import com.escola.auth.application.domain.errors.ValidationError;
import com.escola.auth.shared.Either;

public class RegisterUserController {
  private RegisterUser usecase;

  public RegisterUserController(RegisterUser usecase) {
    this.usecase = usecase;
  }

  public HttpResponse handle(CreateNewUserDTO user) {
    Either<ValidationError, User> response = this.usecase.execute(user);
    if(response.isLeft()) {
      return Unauthorized.response(response.getLeft().getMessage());
    }
    return Created.response();
  }
}
