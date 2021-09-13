import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import { Developer } from '../developer';
import { DEVELOPERS } from '../mock-developers';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(private messageService: MessageService) { }

  getDevelopers(): Observable<Developer[]>{
    const developers =of(DEVELOPERS);
    this.messageService.add('DeveloperService: fetched developers');
    return developers;
  }
}
