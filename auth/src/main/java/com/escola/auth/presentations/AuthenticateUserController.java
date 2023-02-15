package com.escola.auth.presentations;

import com.escola.auth.shared.dto.AuthResponseDTO;
import com.escola.auth.shared.dto.AuthenticateUserDTO;
import com.escola.auth.application.usecases.AuthenticateUser;
import com.escola.auth.presentations.helpers.Authenticated;
import com.escola.auth.presentations.helpers.Unauthorized;
import com.escola.auth.presentations.ports.HttpResponse;
import com.escola.auth.application.domain.errors.ValidationError;
import com.escola.auth.shared.Either;

public class AuthenticateUserController {
  private AuthenticateUser usecase;

  public AuthenticateUserController(AuthenticateUser usecase) {
    this.usecase = usecase;
  }

  public HttpResponse handle(AuthenticateUserDTO authUserData) {
    Either<ValidationError, AuthResponseDTO> response = this.usecase.execute(authUserData);
    if(response.isLeft()) {
      return Unauthorized.response(response.getLeft().getMessage());
    }
    return Authenticated.response(response.getRight());
  }
}
