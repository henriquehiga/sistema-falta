package com.escola.auth.application.domain.entities.errors;

public class InvalidUsernameException extends Error {
  public String name = "InvalidUsernameException";

  public InvalidUsernameException() {
    super("O nome de úsuario não cumpre os requisitos mínimos!");
  }
}
