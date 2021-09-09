import { Component, OnInit } from '@angular/core';
import { Developer} from '../developer';
import {DEVELOPERS} from '../mock-developers';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
  developer: Developer ={ id: 1, name: "Windstorm"};

  developers: Developer[] = DEVELOPERS;

  constructor() { }

  ngOnInit(): void {

  }

}
