import { Component, OnInit } from '@angular/core';
import { Developer} from '../developer';
import { DeveloperService } from './developer.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
  seletedDeveloper: Developer = { id: 1, name: "Windstorm"};

  developers: Developer[] = [];

  constructor(private devService: DeveloperService) { }

  ngOnInit(): void {
    this.getDevelopers();
  }

  onSeleted(dev: Developer): void{

    this.seletedDeveloper = dev;
  }

getDevelopers(): void{
 this.devService.getDevelopers().subscribe(developers => this.developers = developers);
}

}
