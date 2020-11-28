import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/interfaces/resume';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html', 
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume:Resume={
    'experiencia':[],
    'educacion':[],
    'diseno':[],
    'idioma':[],
    'codigo':[],
    'conocimiento':[]
  };

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.getResume().subscribe(resp=>{
      this.resume = resp;
    })

  }

}
