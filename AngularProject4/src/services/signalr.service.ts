import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  startConnection() {

    console.log(
      'SignalR Started');
  }
}
