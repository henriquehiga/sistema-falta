package com.escola.auth.main.routes;

import org.springframework.web.bind.annotation.RestController;

import com.escola.auth.main.factories.AuthenticateUserControllerFactory;
import com.escola.auth.main.factories.RegisterUserControllerFactory;
import com.escola.auth.presentations.AuthenticateUserController;
import com.escola.auth.presentations.RegisterUserController;
import com.escola.auth.presentations.ports.HttpResponse;
import com.escola.auth.shared.dto.CreateNewUserDTO;
import com.escola.auth.shared.dto.AuthenticateUserDTO;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class UserRoutes {

    @PostMapping(value="/register")
    public HttpResponse register(@RequestBody CreateNewUserDTO data) {
        RegisterUserController controller = RegisterUserControllerFactory.makeRegisterUserController();
        HttpResponse response = controller.handle(data);
        return response;
    }

    @PostMapping(value="/login")
    public HttpResponse login(@RequestBody AuthenticateUserDTO data) {
        AuthenticateUserController controller = AuthenticateUserControllerFactory.makeAuthenticateUserController();
        HttpResponse response = controller.handle(data);
        return response;
    }
}
