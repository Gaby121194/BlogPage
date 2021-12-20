import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITSYNCH_TRAININGS_DEMO_BASE_API_URL } from '../app.tokens';
import { Article } from './articles.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    @Inject(ITSYNCH_TRAININGS_DEMO_BASE_API_URL) private baseApiUrl: string,
    private httpClient: HttpClient
  ) {}

  public getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.baseApiUrl}/articles`);
  }

  public postArticle(article : Article): Observable<Article> {
    return this.httpClient.post<Article>(`${this.baseApiUrl}/articles`, article);
  }

  public editArticle(id: number, article : Article): Observable<Article> {
    return this.httpClient.put<Article>(`${this.baseApiUrl}/articles/${id}`, article);
  }

  public getArticleById(id: number): Observable<Article> {
    return this.httpClient.get<Article>(`${this.baseApiUrl}/articles/${id}`)
  }

  public deleteArticle(id: number): Observable<Article> {
    return this.httpClient.delete<Article>(`${this.baseApiUrl}/articles/${id}`)
  }
  
}
