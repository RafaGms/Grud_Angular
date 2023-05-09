import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../components/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url ="http://localhost:3000/clients";

  constructor(private http: HttpClient) { }

  getClient():Observable <Client[]>{

    return this.http.get<Client[]>(this.url) //metodo GET do HTTP para requisição
  }

  save(client:Client):Observable <Client>{
    return this.http.post<Client>(this.url, client); //metodo post do HTTP para salvar
  }

}
