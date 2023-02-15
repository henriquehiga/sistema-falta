package com.escola.auth.main.factories;

import com.escola.auth.application.usecases.RegisterUser;
import com.escola.auth.presentations.RegisterUserController;

public class RegisterUserControllerFactory {
  public static RegisterUserController makeRegisterUserController() {
    RegisterUser usecase = new RegisterUser(RepositoryFactory.get());
    RegisterUserController controller = new RegisterUserController(usecase);
    return controller;
  }
}