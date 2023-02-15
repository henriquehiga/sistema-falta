package com.escola.auth.infra.errors;

public class UsernameAlreadyExistsException extends Error {
  public String name = "UsernameAlreadyExistsException";

  public UsernameAlreadyExistsException() {
    super("Um usuário com esse username já existe!");
  }
}
