package com.escola.auth.main.factories;

import com.escola.auth.application.usecases.AuthenticateUser;
import com.escola.auth.presentations.AuthenticateUserController;

public class AuthenticateUserControllerFactory {
  public static AuthenticateUserController makeAuthenticateUserController() {
    AuthenticateUser usecase = new AuthenticateUser(RepositoryFactory.get());
    AuthenticateUserController controller = new AuthenticateUserController(usecase);
    return controller;
  }
}
