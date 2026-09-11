import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  selectedFileName = '';

  notifications: string[] = [
    'Application Started'
  ];

  onFileSelected(event: any): void {

    if (event.target.files.length > 0) {

      this.selectedFileName =
        event.target.files[0].name;

      this.notifications.push(
        `Selected File : ${this.selectedFileName}`);
    }
  }

  upload(): void {

    this.notifications.push(
      'Upload Started');

    setTimeout(() => {

      this.notifications.push(
        'Job Created');

      this.notifications.push(
        '100 Records Processed');

      this.notifications.push(
        '500 Records Processed');

      this.notifications.push(
        'Job Completed');

    }, 1000);

  }

}
