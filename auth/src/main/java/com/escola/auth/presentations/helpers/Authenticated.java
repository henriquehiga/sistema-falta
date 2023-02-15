package com.escola.auth.presentations.helpers;

import com.escola.auth.presentations.ports.HttpResponse;
import com.escola.auth.shared.dto.AuthResponseDTO;

public class Authenticated {
  public static HttpResponse response(AuthResponseDTO message) {
    return new HttpResponse(200, message.getToken());
  }
}
