import { Client } from './../client';
import { ClientService } from './../../service/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit { //para iniciar o component o OnInit

  clients: Client[] = [];
  formGroupClient: FormGroup;

  constructor(private ClientService: ClientService, private formBuilder: FormBuilder) {

    this.formGroupClient = formBuilder.group({
      id: [''],
      name: [''],
      email: ['']

    });
  }    // para o componente chamar o serviço

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.ClientService.getClient().subscribe({
      next: data => this.clients = data,                         //next pega os clientes
      error: (error) => console.log('Error ao chamar o endpoint' + error)
    })
  }

  save() {
    this.ClientService.save(this.formGroupClient.value).subscribe({
      next: data => {
        this.clients.push(data);
        this.formGroupClient.reset();
      }
    })
  }

}
