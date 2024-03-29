/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: browser-meta-serializator.types.ts
 * Last modified: 21/08/2022, 23:05
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

export enum SingleModuleType {
    STATIC_CONTENT_MODULE = "staticContentModule",
    AUTH_REGISTER_MODULE = "authRegisterModule",
    DYNAMIC_APP_MODULE = "dynamicAppModule",
    SECURED_MODULE = "securedModule",
    SHARED_MODULE = "sharedModule",
}

//----------------------------------------------------------------------------------------------------------------------

export enum SinglePageType {
    HOME_PAGE = "HOME_PAGE",
    CONTENT_NOT_FOUND_PAGE = "CONTENT_NOT_FOUND_PAGE",
    LOG_IN_PAGE = "LOG_IN_PAGE",
    SIGN_UP_PAGE = "SIGN_UP_PAGE",
    RANKINGS_PAGE = "RANKINGS_PAGE",
    ABOUT_PAGE = "ABOUT_PAGE",
    CONTACT_WITH_US_PAGE = "CONTACT_WITH_US_PAGE",
    GAME_RULES_PAGE = "GAME_RULES_PAGE",
    REPORT_A_BUG_PAGE = "REPORT_A_BUG_PAGE",
    GAME_CANVAS_PAGE = "GAME_CANVAS_PAGE",
    NEWSLETTER_PAGE = "NEWSLETTER_PAGE",
    UNSUBSRIBE_NEWSLETTER_VIA_EMAIL_PAGE = "UNSUBSRIBE_NEWSLETTER_VIA_EMAIL_PAGE",
    PRIVACY_POLICY_PAGE = "PRIVACY_POLICY_PAGE",
    FORGOT_PASSWORD_PAGE = "FORGOT_PASSWORD_PAGE",
    ACTIVATE_ACCOUNT_PAGE = "ACTIVATE_ACCOUNT_PAGE",
    FINISH_SIGNUP_PAGE = "FINISH_SIGNUP_PAGE",
    ACTIVATE_ACCOUNT_VIA_EMAIL_PAGE = "ACTIVATE_ACCOUNT_VIA_EMAIL_PAGE",
    MY_ACCOUNT_PAGE = "MY_ACCOUNT_PAGE",
    MY_ACCOUNT_DASHBOARD_PAGE = "MY_ACCOUNT_DASHBOARD_PAGE",
    CHANGE_PASSWORD_PAGE = "CHANGE_PASSWORD_PAGE",
}
