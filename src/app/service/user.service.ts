import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../entity/user';
import {Response} from '../entity/response';
import {UserDto} from '../dto/user-dto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = '';

  constructor(private http: HttpClient) {
  }

  public register(user: User): Observable<Response> {
    return this.http.post<Response>(this.url, user, httpOptions);
  }

  public login(userDto: UserDto): Observable<Response> {
    return this.http.post<Response>(this.url, userDto, httpOptions);
  }
}
