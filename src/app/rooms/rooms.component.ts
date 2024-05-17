import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  person = 'sujan';

  constructor() {}

  onClick = () => {
    console.log('Button Clicked');
  };

  ngOnInit(): void {}
}
