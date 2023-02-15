package com.escola.auth.infra.ports;

import com.escola.auth.application.domain.entities.User;
import com.escola.auth.application.domain.errors.ValidationError;
import com.escola.auth.shared.Either;

public interface UserRepository {
  public Either<ValidationError, User> save(User user);
  public User findByUsername(String username);
  public boolean exists(String username);
}
