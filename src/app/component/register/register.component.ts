import {Component, OnInit} from '@angular/core';
import {User} from '../../entity/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new User('', '', '', '');

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onRegister() {
    this.userService.register(this.model).subscribe(
      (response) => {
        console.log(response.value);
      },
      (error) => {
        console.log(error);
      },
      () => {
      }
    );
  }
}
