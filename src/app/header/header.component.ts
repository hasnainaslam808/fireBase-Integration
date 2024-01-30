import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() productLength: number | undefined;
  constructor(private auth: AuthService,private data:DataService){}
     logOut(){
this.auth.logOut();
  }

  ngOnInit(): void {

  }

}
