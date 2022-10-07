/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *  File name: user-login-details-storage.model.ts
 *  Last modified: 07/10/2022, 11:54
 *  Project name: chess-app-frontend
 *
 *  Licensed under the MIT license; you may not use this file except in compliance with the License.
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 *  THE ABOVE COPYRIGHT NOTICE AND THIS PERMISSION NOTICE SHALL BE INCLUDED IN ALL
 *  COPIES OR SUBSTANTIAL PORTIONS OF THE SOFTWARE.
 */

import { UserCredentialsDataResModel } from "../../shared-module/ngrx-store/session-ngrx-store/ngrx-models/user-credentials-data-res.model";

//----------------------------------------------------------------------------------------------------------------------

export class UserLoginDetailsStorageModel {
    userId: number;
    initials: string;
    fullName: string;
    ifHasPhoto: boolean;
    photoUri: string;
    userLogin: string;

    constructor(userDetailsFromServer: UserCredentialsDataResModel) {
        this.userId = userDetailsFromServer.userId;
        this.initials = userDetailsFromServer.initials;
        this.fullName = userDetailsFromServer.fullName;
        this.ifHasPhoto = userDetailsFromServer.ifHasPhoto;
        this.photoUri = userDetailsFromServer.photoUrl;
        this.userLogin = userDetailsFromServer.nickname;
    };
}
