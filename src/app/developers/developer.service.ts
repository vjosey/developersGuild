import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Developer } from '../developer';
import { DEVELOPERS } from '../mock-developers';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor() { }

  getDevelopers(): Observable<Developer[]>{
    const developers =of(DEVELOPERS);
    return developers;
  }
}
