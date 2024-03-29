/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: gfx.initial.ts
 * Last modified: 25/09/2022, 04:11
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

import { GlobalResponseModalModel } from "./ngrx-models/global-response-modal.model";
import { SuspenseLoader, SuspenseLoaderResModel } from "../../../../models/suspense-loader-res.model";

//----------------------------------------------------------------------------------------------------------------------

export interface GfxStateTypes {
    globalSuspenseActive: boolean;
    suspenseStatus: SuspenseLoaderResModel;
    globalResponseModal: GlobalResponseModalModel;
}

//----------------------------------------------------------------------------------------------------------------------

export const initialGfxState: GfxStateTypes = {
    globalSuspenseActive: false,
    suspenseStatus: new SuspenseLoaderResModel(false, SuspenseLoader.INACTIVE),
    globalResponseModal: new GlobalResponseModalModel(false, "", false),
};
