import { Injectable } from "@angular/core";
import { Camisas } from "./model/Product";
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class CamisasService {

    private camisasUrl: string = 'http://localhost:3000/camisas';

    httpsOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private httpClient: HttpClient) {}

    retriveAll(): Observable<Camisas[]> {
        return this.httpClient.get<Camisas[]>(this.camisasUrl);
    }



}