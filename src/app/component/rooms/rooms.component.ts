import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';
import { HotelComponent } from '../hotel/hotel.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective, HotelComponent],
  // viewProviders: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  classList = {};

  noOfRooms = 10;

  roomList = [
    { name: 'Room 1', capacity: 2, type: 'Single' },
    { name: 'Room 2', capacity: 3, type: 'Double' },
    { name: 'Room 3', capacity: 4, type: 'Suite' },
  ];

  capacity = 20;

  availableRoom = 10;

  onRoomStatusCheck = () => {
    if (this.availableRoom > 0) {
      this.availableRoom = 0;
      this.classList = {
        room_na: true,
      };
    } else {
      this.availableRoom = 10;
      this.classList = {
        room_avail: true,
      };
    }
  };

  ngOnInit(): void {}
}
