import "rxjs/add/observable/from";
import "rxjs/add/operator/concatAll"; // test only
import "rxjs/add/operator/delay"; // test only
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { constants } from "./constants";
import { model } from "../../protos/model";

@Injectable()
export class CollectionsService {

    constructor(private http: HttpClient) {}

    getAllCollections(): Observable<model.Collection> {
        return this.http.get(constants.API_SERVER + constants.API_PREFIX + "/collection")
        .mergeMap((data: Array<Object>) => Observable.from(data))
        .map((data: Object) => model.Collection.fromObject(data))
        .map((data: model.Collection) => Observable.from([data]).delay(3000)) // test only.
        .concatAll(); // test only
    }
}
