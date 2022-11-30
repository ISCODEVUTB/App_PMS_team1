import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/modelos/client';
import { ClientService } from 'src/app/servicios/client.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    ClientID: ['', [Validators.required]],
    Name: ['', [Validators.required]],
    Surname: ['', [Validators.required]],
    Direction: ['', [Validators.required]],
    Phone: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private clientServicio: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  crearClient() {
    let client = new Client();
    client.ClientID= parseInt(this.fgValidator.controls["ClientID"].value);
    client.Name = this.fgValidator.controls["Name"].value;
    client.Surname = this.fgValidator.controls["Surname"].value;
    client.Direction = this.fgValidator.controls["Direction"].value;
    client.Phone = parseInt(this.fgValidator.controls["Phone"].value);
    this.clientServicio.crearClient(client).subscribe({
      next: (client) => {
        alert("cliente almacenado");
        this.router.navigate(["/client"]);
      },
      error: (error) => { alert("error almacenando al cliente"); }
    })
  }

}

