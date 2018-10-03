import {Component, OnInit} from '@angular/core';
import {UserDto} from '../../dto/user-dto';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new UserDto('', '');

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onLogIn() {
    this.userService.login(this.model).subscribe(
      (response) => {
        console.log(response.value);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
