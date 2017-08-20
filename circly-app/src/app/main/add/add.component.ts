import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { fadeInAnimation } from "../../shared/animations/fade.animation";

import { CollectionsService } from "../../shared/providers/data/collections.service";

import { model } from "../../shared/protos/model";


@Component({
    selector: "add-component",
    styleUrls: ["./add.component.css"],
    animations: [fadeInAnimation],
    templateUrl: "./add.component.html"
})
export class AddComponent {
    collectionForm: FormGroup;

    constructor(
        private collectionsService: CollectionsService,
        private fb: FormBuilder) {
        this.createForm();
    }

    onSubmit(): void {
        const newCollection = new model.Collection();
        newCollection.name = this.collectionForm.get("name")!.value;
        newCollection.description = this.collectionForm.get("description")!.value;
        this.collectionsService.createCollection(newCollection).subscribe(createdCollection => {
            console.log(createdCollection);
        })
    }

    private createForm(): void {
        this.collectionForm = this.fb.group({
            name: ["", Validators.required],
            description: ""
        });
    }

}
