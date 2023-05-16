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

  remove(client:Client):Observable <void>{
    return this.http.delete<void>(`${this.url}/${client.id}`); //metodo delete do HTTP para deletar
  }
  update(client:Client):Observable <Client>{
    return this.http.put<Client>(`${this.url}/${client.id}`,client); //metodo delete do HTTP para deletar
  }

}
