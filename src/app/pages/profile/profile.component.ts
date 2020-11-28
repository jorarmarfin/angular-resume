import { Component, OnInit } from '@angular/core';
import { Category, Profile, Social } from 'src/app/interfaces/profile';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  nombre:string;
  categorias:Category[]=[];
  social:Social[]=[];

  constructor(private dataservice:DataService) { 
  }

  ngOnInit(): void {
    this.cargaData();
  }
  cargaData(){
    this.dataservice.getProfile().subscribe(resp=>{
      this.nombre = resp.nombre_completo;
      this.categorias = resp.category;
      this.social = resp.social;
    });

  }

}
