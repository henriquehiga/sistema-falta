package com.escola.auth.libs;
import java.util.Date;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtAdapter {
  private static final String SECRET_KEY = "my_secret_key";
  private static final long EXPIRATION_TIME = 3_600_000;

  public static String generateToken(String username) {
    Date now = new Date();
    Date expiration = new Date(now.getTime() + EXPIRATION_TIME);
    return Jwts.builder()
            .setSubject(username)
            .claim("cargo", "adm")
            .setIssuedAt(now)
            .setExpiration(expiration)
            .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
            .compact();
  }
}
