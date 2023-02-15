package com.escola.auth.application.domain.entities.errors;

public class InvalidPasswordException extends Error {
  public String name = "InvalidPasswordException";

  public InvalidPasswordException() {
    super("A senha não cumpre os requisitos mínimos!");
  }
}
