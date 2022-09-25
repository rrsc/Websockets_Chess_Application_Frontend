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

import { Component, OnDestroy } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import { Subject } from "rxjs";
import { RxjsHelper } from "../../../../rxjs-helpers/rxjs.helper";

import { BrowserThemeDetector } from "../../../../browster-utils/browser-theme.detector";
import { BrowserMetaSerializatorLoader } from "../../../../browser-meta-serialization/browser-meta-serializator.loader";
import { SingleModuleType, SinglePageType } from "../../../../browser-meta-serialization/browser-meta-serializator.types";

import { AuthWithGfxCombinedReducerTypes } from "../../../../ngrx-helpers/ngrx-store.types";
import * as NgrxSelector_GFX from "../../../shared-module/ngrx-store/gfx-ngrx-store/gfx.selectors";

//----------------------------------------------------------------------------------------------------------------------

@Component({
    selector: "mgchess-login-page",
    templateUrl: "./log-in-page.component.html",
    styleUrls: [ "./log-in-page.component.scss" ],
    host: { class: "mg-chess__flex-safety-container remove-margin__small-devices" },
    providers: [ Oauth2RequestEndpointsContants ],
})
export class LogInPageComponent extends BrowserMetaSerializatorLoader implements OnDestroy {

    _oauth2ResError: string;
    _oauth2ResToken: string | null;
    _oauth2ResSupplier: string | null;
    _oauth2SuspenseActive: boolean = false;

    readonly _googleSupplier: OAuthSupplier = OAuthSupplier.GOOGLE;
    readonly _facebookSupplier: OAuthSupplier = OAuthSupplier.FACEBOOK;

    private _ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private _metaService: Meta,
        private _titleService: Title,
        private _route: ActivatedRoute,
        private _store: Store<AuthReducerType>,
        public _oauth2Constants: Oauth2RequestEndpointsContants,
    ) {
        super(_titleService, _metaService, SingleModuleType.AUTH_REGISTER_MODULE, SinglePageType.LOG_IN_PAGE);
        this._store.dispatch(NgrxAction_ATH.__cleanServerResponse());
        this._oauth2ResError = this._route.snapshot.queryParamMap.get("error") || "";
        this._oauth2ResToken = this._route.snapshot.queryParamMap.get("token");
        this._oauth2ResSupplier = this._route.snapshot.queryParamMap.get("supplier");
        this.autoLoginViaOAuth2ServerResponsesParams();
        RxjsHelper.subscribeData(this._store, NgrxSelector_ATH.sel_loginViaOAuth2Suspense, this._ngUnsubscribe)
            .subscribe(data => this._oauth2SuspenseActive = data);
    };

    ngOnDestroy(): void {
        RxjsHelper.cleanupExecutor(this._ngUnsubscribe);
    };

    selectApplicationLogoBasedCurrentTheme(): string {
        return BrowserThemeDetector.getLogoSrcBasedCurrentTheme();
    };

    private autoLoginViaOAuth2ServerResponsesParams(): void {
        if (!Boolean(this._oauth2ResToken) || !Boolean(this._oauth2ResSupplier)) return;
        const req = new LoginViaOAuth2ReqModel(this._oauth2ResToken!, this._oauth2ResSupplier!);
        this._store.dispatch(NgrxAction_ATH.__attemptToLoginViaOAuth2({ req }));
    };
}
