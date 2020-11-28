import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../interfaces/about';
import { Profile } from '../interfaces/profile';
import { Resume } from '../interfaces/resume';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getProfile():Observable<Profile>{
      return this.http.get<Profile>('/assets/data/profile.json');
  }
  getAbout():Observable<About> {
      return this.http.get<About>('/assets/data/about.json');
  }
  getResume():Observable<Resume>  {
      return this.http.get<Resume>('/assets/data/resume.json');
  }



}
