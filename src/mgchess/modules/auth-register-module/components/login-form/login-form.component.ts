/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: login-form.component.ts
 * Last modified: 08/09/2022, 16:49
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

import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { Observable, Subject } from "rxjs";
import { RxjsHelper } from "../../../../rxjs-helpers/rxjs.helper";

import { LoginFormModel } from "../../models/login-form.model";
import { AngularFormsHelper } from "../../../../angular-forms-helpers/angular-forms.helper";
import { ServerReqResHelper } from "../../../../http-request-helpers/server-req-res.helper";
import { SimpleMessageResWithErrorModel } from "../../../../models/simple-message-response.model";
import { ValidatorPatternConstants } from "../../../../validator-helpers/validator-pattern.constants";
import { PasswordInputClassesModel } from "../../../shared-module/models/password-input-classes.model";

import { AuthReducerType } from "../../../../ngrx-helpers/ngrx-store.types";
import * as NgrxAction_ATH from "../../ngrx-store/auth-ngrx-store/auth.actions";
import * as NgrxSelector_ATH from "../../ngrx-store/auth-ngrx-store/auth.selectors";

//----------------------------------------------------------------------------------------------------------------------

@Component({
    selector: "mgchess-login-form",
    templateUrl: "./login-form.component.html",
    providers: [ ValidatorPatternConstants ],
})
export class LoginFormComponent implements OnInit, OnDestroy {

    _loginForm: FormGroup;
    _serverResponse!: SimpleMessageResWithErrorModel;
    _suspenseLoader$: Observable<boolean> = this._store.select(NgrxSelector_ATH.sel_loginViaLocalSupense);

    readonly _formHelper: AngularFormsHelper = new AngularFormsHelper();
    readonly _serverResReqHelper: ServerReqResHelper = new ServerReqResHelper();
    readonly _cssClasses: PasswordInputClassesModel = new PasswordInputClassesModel(
        "text--secondary-color", "input--secondary-color", "paragraph--error-reverse-theme-change");

    private _ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private _store: Store<AuthReducerType>,
        private _regex: ValidatorPatternConstants,
    ) {
        this._loginForm = new FormGroup({
            usernameEmail: new FormControl("", [ Validators.required ]),
            password: new FormControl("", [ Validators.required, Validators.pattern(_regex.PASSWORD_REGEX) ]),
            rememberAccount: new FormControl(true),
        });
    };

    ngOnInit(): void {
        this._formHelper.field("rememberAccount", this._loginForm).setValue(true);
        RxjsHelper.subscribeData(this._store, NgrxSelector_ATH.sel_serverResponse, this._ngUnsubscribe)
            .subscribe(data => this._serverResponse = data);
    };

    ngOnDestroy(): void {
        RxjsHelper.cleanupExecutor(this._ngUnsubscribe);
    };

    handleSubmitCredentialsAndAttemptLoginUser(): void {
        const req = this._formHelper.extractFormFields<LoginFormModel>(this._loginForm, false);
        this._store.dispatch(NgrxAction_ATH.__attemptToLoginViaLocal({ loginForm: req }));
        this._loginForm.reset(new LoginFormModel("", "", false));
    };

    clearLoginServerResponse(): void {
        if (this._serverResponse.responseMessage !== "") {
            this._store.dispatch(NgrxAction_ATH.__cleanServerResponse());
        }
    };
}