import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'app-form-errors',
    templateUrl: './form-errors.component.html',
    styleUrls: ['./form-errors.component.css']
})
export class FormErrorsComponent {
    @Input() public value: any;
    @Input() public label: string;
    @Input() public validators: string[];

}
