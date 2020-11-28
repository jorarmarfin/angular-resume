import { Component, OnInit } from '@angular/core';
import { About, Cliente, Gusto, Servicio } from 'src/app/interfaces/about';
import { Me } from 'src/app/interfaces/profile';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about:About;
  me:Me={};
  servicios:Servicio[]=[];
  gustos:Gusto[]=[];
  clientes:Cliente[]=[];
  pensamiento:string;

  constructor(private ds:DataService) { 
    this.ds.getAbout().subscribe(resp=>{
        this.about = resp;
        this.me = resp.me;
        this.servicios = resp.servicios;
        this.gustos = resp.gustos;
        this.clientes = resp.clientes;
        this.pensamiento = resp.pensamiento;
    });
  }

  ngOnInit(): void {
  }

}
