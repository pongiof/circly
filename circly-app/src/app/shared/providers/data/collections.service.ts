import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergemap';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { constants } from './constants';
import { model } from '../../protos/model';

@Injectable()
export class CollectionsService {

    constructor(private http: HttpClient) {}

    getAllCollections(): Observable<model.Collection> {
        return this.http.get(constants.API_SERVER + constants.API_PREFIX + "collection")
        .mergeMap((data: Array<Object>) => { return Observable.from(data); })
        .map((data: Object) => { return model.Collection.fromObject(data); });
    }
}
