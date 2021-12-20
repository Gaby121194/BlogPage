import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ITSYNCH_TRAININGS_DEMO_BASE_API_URL } from '../app.tokens';
import { Comment } from './comment.model';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _refresh$ = new Subject<void>();
  constructor(
    @Inject(ITSYNCH_TRAININGS_DEMO_BASE_API_URL) private baseApiUrl: string,
    private httpClient: HttpClient
  ) { }

  get refresh$(){
    return this._refresh$;
  }
  public postComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(`${this.baseApiUrl}/comments`, comment)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  public getCommentsByArticleId(id: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.baseApiUrl}/comments/${id}`)
  }
  
}

