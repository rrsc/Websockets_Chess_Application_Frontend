/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: gfx.selectors.ts
 * Last modified: 25/09/2022, 04:20
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

import { createFeatureSelector, createSelector } from "@ngrx/store";

import { gfxNgrxStore } from "./gfx.reducer";
import { GfxStateTypes } from "./gfx.initial";
import { SuspenseLoader } from "../../../../models/suspense-loader-res.model";

//----------------------------------------------------------------------------------------------------------------------

const selectorWithInjectedStore = (payload: (state: any, action?: any) => any) => (
    createSelector(createFeatureSelector<GfxStateTypes>(gfxNgrxStore.reducerName), payload)
);

//----------------------------------------------------------------------------------------------------------------------

export const sel_globalSuspenseLoadingStatus = selectorWithInjectedStore(state =>
    state.globalSuspenseActive,
);

export const sel_loginViaLocalSupense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.ATTEMPT_LOGIN_VIA_LOCAL,
);

export const sel_signupViaLocalSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.ATTEMPT_SIGNUP_VIA_LOCAL,
);

export const sel_loginViaOAuth2Suspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.ATTEMPT_LOGIN_VIA_OAUTH2,
);

export const sel_finishSignupViaOAuth2Suspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.ATTEMPT_FINISH_SIGNUP_VIA_OAUTH2,
);

export const sel_attemptUnsubscribeLoadingSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.ATTEMPT_UNSUBSCRIBE,
);

export const sel_unsubscribeLoadingViaOtaSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.UNSUBSCRIBE_VIA_OTA,
);

export const sel_finishSignupViaOauth2Suspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.FINISH_SIGNUP_VIA_OAUTH2,
);

export const sel_resendActivateAccountLinkSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.RESEND_ACTIVATE_ACCOUNT_LINK,
);

export const sel_activateAccountViaOtaSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.ACTIVATE_ACCOUNT_VIA_OTA,
);

export const sel_attemptToActivateAccountViaOtaSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.ATTEMPT_ACTIVATE_ACCOUNT_VIA_OTA,
);

export const sel_attemptToChangePasswordSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.ATTEMPT_CHANGE_PASSWORD,
);

export const sel_validateChangePasswordOtaTokenSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.VALIDATE_OTA_TOKEN_CHANGE_PASSWORD,
);

export const sel_validateChangePasswordJwtTokenSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.VALIDATE_JWT_TOKEN_CHANGE_PASSWORD,
);

export const sel_changeForgotterPasswordSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.CHANGE_FORGOTTER_PASSWORD,
);

export const sel_resendChangePasswordLinkSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.RESEND_CHANGE_PASSWORD_LINK,
);

export const sel_resendUnsubscribeNewsletterLinkSuspense = selectorWithInjectedStore(({ suspenseStatus }) =>
    suspenseStatus.isSuspenseLoading && suspenseStatus.loadingFor === SuspenseLoader.RESEND_UNSUBSCRIBE_NEWSLETTER_LINK,
);

export const sel_globalResponseModalData = selectorWithInjectedStore(({ globalResponseModal }) =>
    globalResponseModal,
);


