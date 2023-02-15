package com.escola.auth.infra.errors;

public class PersistError extends Error {
    public String name = "PersistError";

    public PersistError() {
      super("Erro ao registrar o usuário!");
    }
}
