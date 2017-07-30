import "rxjs/add/observable/from";
import "rxjs/add/operator/concatAll"; // test only
import "rxjs/add/operator/delay"; // test only
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { environment } from "../../../../environments/environment";
import { model } from "../../protos/model";

@Injectable()
export class CollectionsService {

    constructor(private http: HttpClient) {}

    getAllCollections(): Observable<model.Collection> {
        return this.http.get(environment.api_server + environment.api_prefix + "/collection")
        .mergeMap((data: Array<object>) => Observable.from(data))
        .map((data: object) => model.Collection.fromObject(data))
        .map((data: model.Collection) => Observable.from([data]).delay(3000)) // test only.
        .concatAll(); // test only
    }
}
