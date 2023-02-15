package com.escola.auth.main.factories;

import com.escola.auth.infra.PostgresUserRepository;
import com.escola.auth.infra.ports.UserRepository;

public class RepositoryFactory {
  public static UserRepository get() {
    return new PostgresUserRepository();
  }
}
