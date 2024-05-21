import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  noOfRooms = 0;

  roomMetaInfo = {
    booked: 10,
    available: 10,
  };

  constructor() {}

  onClick = () => {
    console.log('Button Clicked');
  };

  ngOnInit(): void {}
}
