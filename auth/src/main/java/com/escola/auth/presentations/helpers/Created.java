package com.escola.auth.presentations.helpers;

import com.escola.auth.presentations.ports.HttpResponse;

public class Created {
  public static HttpResponse response() {
    return new HttpResponse(201, null);
  }
}