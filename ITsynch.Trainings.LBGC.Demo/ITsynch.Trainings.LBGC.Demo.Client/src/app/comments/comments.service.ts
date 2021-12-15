import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ITSYNCH_TRAININGS_DEMO_BASE_API_URL } from '../app.tokens';
import { Comments } from './comments.model';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    @Inject(ITSYNCH_TRAININGS_DEMO_BASE_API_URL) private baseApiUrl: string,
    private httpClient: HttpClient
  ) { }

  public postComment(comment: Comments): Observable<Comments> {
    return this.httpClient.post<Comments>(`${this.baseApiUrl}/comment`, comment)
  }

  public getCommentsById(id: number): Observable<Comments> {
    return this.httpClient.get<Comments>(`${this.baseApiUrl}/comment/${id}`)
  }
}

