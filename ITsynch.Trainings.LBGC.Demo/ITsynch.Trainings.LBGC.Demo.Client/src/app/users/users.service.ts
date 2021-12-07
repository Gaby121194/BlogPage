import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITSYNCH_TRAININGS_DEMO_BASE_API_URL } from '../app.tokens';
import { User } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    @Inject(ITSYNCH_TRAININGS_DEMO_BASE_API_URL) private baseApiUrl: string,
    private httpClient: HttpClient
  ) {}

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseApiUrl}/users`);
  }
}
