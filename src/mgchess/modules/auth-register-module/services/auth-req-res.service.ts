/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: auth-req-res.service.ts
 * Last modified: 09/09/2022, 15:06
 * Project name: chess-app-frontend
 *
 * Licensed under the MIT license; you may not use this file except in compliance with the License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * THE ABOVE COPYRIGHT NOTICE AND THIS PERMISSION NOTICE SHALL BE INCLUDED IN ALL
 * COPIES OR SUBSTANTIAL PORTIONS OF THE SOFTWARE.
 */

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { HttpEndpointsHelper } from "../../../http-request-helpers/http-endpoints.helper";
import { SimpleMessageResponseModel } from "../../../models/simple-message-response.model";
import { LoginSignupViaOAuth2ReqModel } from "../../../models/login-signup-via-oauth2-req.model";

import { SignupReqModel } from "../ngrx-store/auth-ngrx-store/ngrx-models/signup-req.model";
import { FinishSignupAccountDataReqModel } from "../ngrx-store/auth-ngrx-store/ngrx-models/finish-signup-account-data-req.model";
import { AttemptFinishSignupAccountDataResModel } from "../ngrx-store/auth-ngrx-store/ngrx-models/attempt-finish-signup-account-data-res.model";

//----------------------------------------------------------------------------------------------------------------------

@Injectable()
export class AuthReqResService {

    constructor(
        private _http: HttpClient,
        private _endpoint: HttpEndpointsHelper,
    ) {
    };

    signupViaLocal(req: SignupReqModel): Observable<SimpleMessageResponseModel> {
        return this._http.post<SimpleMessageResponseModel>(
            this._endpoint.SIGNUP_VIA_LOCAL,
            req,
        );
    };

    attemptToFinishSignupViaOAuth2(req: LoginSignupViaOAuth2ReqModel): Observable<AttemptFinishSignupAccountDataResModel> {
        return this._http.post<AttemptFinishSignupAccountDataResModel>(
            this._endpoint.ATTEMPT_FINISH_SIGNUP_VIA_OAUTH2,
            req,
        );
    };

    finishSignupViaOAuth2(req: FinishSignupAccountDataReqModel): Observable<SimpleMessageResponseModel> {
        return this._http.post<SimpleMessageResponseModel>(
            this._endpoint.FINISH_SIGNUP_VIA_OAUTH2,
            req,
        );
    };
}
