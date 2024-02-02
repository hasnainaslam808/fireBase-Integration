import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fireBase-CRUD';

  message:any
  constructor(private data:DataService){}
  ngOnInit(): void{
    this.data.requestPermission();
    this.data.listen();
    this.data.receiveMessage();
    this.message = this.data.currentMessage;
  }
}
