import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { fadeInAnimation } from "../../shared/animations/fade.animation";

@Component({
    selector: "add-component",
    styleUrls: ["./add.component.css"],
    animations: [fadeInAnimation],
    templateUrl: "./add.component.html"
})
export class AddComponent {
    collectionForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    onSubmit(): void {
        console.log(this.collectionForm);
    }

    private createForm(): void {
        this.collectionForm = this.fb.group({
            name: ["", Validators.required],
            description: ""
        });
    }

}
