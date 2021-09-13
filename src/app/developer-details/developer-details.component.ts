import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../developer';

@Component({
  selector: 'app-developer-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent implements OnInit {

  @Input() developer?: Developer;

  constructor() { }

  ngOnInit(): void {
  }

}
