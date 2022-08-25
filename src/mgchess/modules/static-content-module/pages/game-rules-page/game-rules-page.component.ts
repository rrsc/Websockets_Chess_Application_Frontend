/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: game-rules-page.component.ts
 * Last modified: 23/08/2022, 18:41
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

import { BrowserMetaSerializationLoader } from "../../../../browser-meta-serialization/BrowserMetaSerializationLoader";
import { SingleModuleType, SinglePageType } from "../../../../browser-meta-serialization/BrowserMetaSerializationTypes";

//----------------------------------------------------------------------------------------------------------------------

@Component({
    selector: "mgchess-game-rules-page",
    templateUrl: "./game-rules-page.component.html",
    styleUrls: [ "./game-rules-page.component.scss" ]
})
export class GameRulesPageComponent extends BrowserMetaSerializationLoader {

    constructor(
        private _titleService: Title,
        private _metaService: Meta
    ) {
        super(_titleService, _metaService, SingleModuleType.STATIC_CONTENT_MODULE, SinglePageType.GAME_RULES_PAGE);
    };
}
