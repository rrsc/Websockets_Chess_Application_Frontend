/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: log-in-page.component.ts
 * Last modified: 22/08/2022, 13:15
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

import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import { BrowserThemeDetector } from "../../../../browster-utils/browser-theme.detector";
import { Oauth2RequestEndpointsContants } from "../../../../http-request-helpers/oauth2-request-endpoints.contants";
import { BrowserMetaSerializatorLoader } from "../../../../browser-meta-serialization/browser-meta-serializator.loader";
import { SingleModuleType, SinglePageType } from "../../../../browser-meta-serialization/browser-meta-serializator.types";

import { AuthReducerType } from "../../../../ngrx-helpers/ngrx-store.types";
import * as NgrxAction_ATH from "../../ngrx-store/auth-ngrx-store/auth.actions";

//----------------------------------------------------------------------------------------------------------------------

@Component({
    selector: "mgchess-login-page",
    templateUrl: "./log-in-page.component.html",
    styleUrls: [ "./log-in-page.component.scss" ],
    host: { class: "mg-chess__flex-safety-container remove-margin__small-devices" },
    providers: [ Oauth2RequestEndpointsContants ],
})
export class LogInPageComponent extends BrowserMetaSerializatorLoader {

    _oauth2ServerResponseError: string;

    constructor(
        private _metaService: Meta,
        private _titleService: Title,
        private _route: ActivatedRoute,
        private _store: Store<AuthReducerType>,
        public _oauth2Constants: Oauth2RequestEndpointsContants,
    ) {
        super(_titleService, _metaService, SingleModuleType.AUTH_REGISTER_MODULE, SinglePageType.LOG_IN_PAGE);
        this._oauth2ServerResponseError = this._route.snapshot.queryParams["error"];
        if (this._oauth2ServerResponseError === undefined) this._oauth2ServerResponseError = "";
        this._store.dispatch(NgrxAction_ATH.__cleanServerResponse());
    };

    selectApplicationLogoBasedCurrentTheme(): string {
        return BrowserThemeDetector.getLogoSrcBasedCurrentTheme();
    };
}
