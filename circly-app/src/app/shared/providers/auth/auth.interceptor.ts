import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { environment } from "../../../../environments/environment";

import { AuthService } from "./auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    jwtToken: object|null;

    constructor(private authService: AuthService) {
        this.jwtToken = authService.getIdToken();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (environment.production) {
            req = req.clone(
                {headers: req.headers
                    .set("x-api-key", environment.api_key)
                    .set("Authorization", `Bearer ${this.jwtToken}`)}
            );
        }
        return next.handle(req);
  }
}
