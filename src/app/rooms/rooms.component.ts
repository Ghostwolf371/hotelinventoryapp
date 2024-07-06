import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  imports: [CommonModule, RoomsListComponent],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selcetedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1719825718360-7de63c92135f?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov- 2021'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos:
          'https://images.unsplash.com/photo-1719825718360-7de63c92135f?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov- 2021'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos:
          'https://images.unsplash.com/photo-1719825718360-7de63c92135f?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov- 2021'),
        rating: 2.6,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selcetedRoom = room;
  }
}
