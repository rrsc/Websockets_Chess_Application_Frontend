/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: signup-password-control-group.component.ts
 * Last modified: 14/09/2022, 01:26
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

import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Subject, takeUntil } from "rxjs";
import { RxjsHelper } from "../../../../rxjs-helpers/rxjs.helper";

import { ValidatorConstraint } from "../../../../validator-helpers/angular-form.validator";
import { AngularFormsHelper } from "../../../../angular-forms-helpers/angular-forms.helper";
import { PasswordInputClassesModel } from "../../../shared-module/models/password-input-classes.model";

import { PasswordStrength, PasswordStrengthMeterService } from "../../services/password-strength-meter.service";

//----------------------------------------------------------------------------------------------------------------------

@Component({
    selector: "mgchess-signup-password-control-group",
    templateUrl: "./signup-password-control-group.component.html",
    styleUrls: [ "./signup-password-control-group.component.scss" ],
    providers: [ PasswordStrengthMeterService ],
})
export class SignupPasswordControlGroupComponent implements OnChanges, OnDestroy {

    @Input() _singupForm!: FormGroup;
    @Output() _clearResponseEmitter: EventEmitter<void> = new EventEmitter<void>();

    _passwordScore: PasswordStrength = new PasswordStrength(0, "none");

    readonly _formHelper: AngularFormsHelper = new AngularFormsHelper();
    readonly _passwordSAreNotTheSame = ValidatorConstraint.PASSWORDS_ARE_NOT_THE_SAME;
    readonly _cssClasses: PasswordInputClassesModel = new PasswordInputClassesModel(
        "text--secondary-color", "input--secondary-color", "paragraph--error-reverse-theme-change");

    private _ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private _passwordMeterService: PasswordStrengthMeterService,
    ) {
    };

    ngOnChanges(): void {
        this._formHelper.field("password", this._singupForm).valueChanges.pipe(takeUntil(this._ngUnsubscribe))
            .subscribe(data => this._passwordScore = this._passwordMeterService.computePasswordPower(data));
    };

    ngOnDestroy(): void {
        RxjsHelper.cleanupExecutor(this._ngUnsubscribe);
    };
}