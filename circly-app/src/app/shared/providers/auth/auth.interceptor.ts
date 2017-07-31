import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { environment } from "../../../../environments/environment";

import { AuthService } from "./auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!environment.production) {
            req = req.clone(
                {headers: req.headers
                    .set("x-api-key", environment.api_key)
                    .set("Authorization", `Bearer ${this.authService.getCurrentToken()}`)}
            );
        }
        return next.handle(req);
  }
}
