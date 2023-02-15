package com.escola.auth.presentations.helpers;

import com.escola.auth.presentations.ports.HttpResponse;

public class Unauthorized {
  public static HttpResponse response(String message) {
    return new HttpResponse(400, message);
  }
}
