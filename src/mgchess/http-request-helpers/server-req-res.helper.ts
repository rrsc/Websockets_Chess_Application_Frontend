/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: server-req-res.helper.ts
 * Last modified: 25/08/2022, 22:36
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

import { SimpleMessageResWithErrorModel } from "../models/simple-message-response.model";

//----------------------------------------------------------------------------------------------------------------------

export class ServerReqResHelper {

    private readonly BASIC_FIELD_CLASS = "mg-chess__form-data-paragraph" as const;

    private readonly ERROR_FIELD_CLASS = this.BASIC_FIELD_CLASS + " paragraph--error";
    private readonly INFO_FIELD_CLASS = this.BASIC_FIELD_CLASS + " paragraph--info";

    private readonly ERROR_THEME_FIELD_CLASS = this.BASIC_FIELD_CLASS + " paragraph--error-theme-change";
    private readonly INFO_THEME_FIELD_CLASS = this.BASIC_FIELD_CLASS + " paragraph--info-theme-change";

    private readonly ERROR_REVERSE_THEME_FIELD_CLASS = this.BASIC_FIELD_CLASS + " paragraph--error-reverse-theme-change";
    private readonly INFO_REVERSE_THEME_FIELD_CLASS = this.BASIC_FIELD_CLASS + " paragraph--info-reverse-theme-change";

    //------------------------------------------------------------------------------------------------------------------

    responseCssClass(ifError: boolean): string {
        return ifError ? this.ERROR_FIELD_CLASS : this.INFO_FIELD_CLASS;
    };

    //------------------------------------------------------------------------------------------------------------------

    responseThemeCssClass(ifError: boolean): string {
        return ifError ? this.ERROR_THEME_FIELD_CLASS : this.INFO_THEME_FIELD_CLASS;
    };

    //------------------------------------------------------------------------------------------------------------------

    responseReverseThemeCssClass(ifError: boolean): string {
        return ifError ? this.ERROR_REVERSE_THEME_FIELD_CLASS : this.INFO_REVERSE_THEME_FIELD_CLASS;
    };

    //------------------------------------------------------------------------------------------------------------------

    clearServerMessage(messageData: SimpleMessageResWithErrorModel): void {
        messageData.responseMessage = "";
        messageData.responseError = false;
    };
}
