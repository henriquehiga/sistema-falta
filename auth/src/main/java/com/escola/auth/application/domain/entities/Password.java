package com.escola.auth.application.domain.entities;

import com.escola.auth.application.domain.entities.errors.InvalidPasswordException;
import com.escola.auth.libs.PassHashAdapter;
import com.escola.auth.shared.Either;

public class Password {
  public String value;

  private Password(String password) {
    this.value = password;
  }

  public static Either<InvalidPasswordException, Password> create(String password) {
    boolean isValidPassword = isValidPassword(password);
    if(!isValidPassword) {
      return Either.left(new InvalidPasswordException());
    }
//    String hashedPassword = hashPassword(password);
    return Either.right(new Password(password));
  }

  public static String hashPassword(String password) {
    return PassHashAdapter.hash(password);
}

  public static boolean verifyPassword(String password, String hashedPassword) {
    return PassHashAdapter.isEqual(password, hashedPassword);
  }

  private static boolean isValidPassword(String password) {
    if(password.length() > 64 || password.length() < 8) {
      return false;
    }
    return true;
  }
}
