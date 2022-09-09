/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: auth.initial.ts
 * Last modified: 09/09/2022, 14:43
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

import { SuspenseLoader, SuspenseLoaderResModel } from "../../../../models/suspense-loader-res.model";
import { SimpleMessageResWithErrorModel } from "../../../../models/simple-message-response.model";
import { UserCredentialsDataResModel } from "./ngrx-models/user-credentials-data-res.model";

//----------------------------------------------------------------------------------------------------------------------

export interface AuthStateTypes {
    suspenseLoader: SuspenseLoaderResModel;
    serverResponse: SimpleMessageResWithErrorModel;
    userCredentialsData: UserCredentialsDataResModel | null;
}

//----------------------------------------------------------------------------------------------------------------------

export const initialAuthState: AuthStateTypes = {
    suspenseLoader: new SuspenseLoaderResModel(false, SuspenseLoader.INACTIVE),
    serverResponse: new SimpleMessageResWithErrorModel("", false),
    userCredentialsData: null,
};