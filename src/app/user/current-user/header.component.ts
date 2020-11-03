import {Component, Input, OnInit} from '@angular/core';
import {UserStorage} from "../user.storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private storage: UserStorage, private router: Router) {
  }

  ngOnInit(): void {
    this.username = this.storage.getUsername();
  }

  signOut() {
    this.storage.signOut();
    this.router.navigate(['login']);
  }
}
