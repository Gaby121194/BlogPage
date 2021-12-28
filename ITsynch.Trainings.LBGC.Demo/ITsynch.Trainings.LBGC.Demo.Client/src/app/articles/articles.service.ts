import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITSYNCH_TRAININGS_DEMO_BASE_API_URL } from '../app.tokens';
import { Article } from './models/articles.model';
import { Filter } from './models/filter.model';

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

  public getFavoritesArticles(userId: number): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.baseApiUrl}/articles/getFavoritesArticles/${userId}`);
  }

  public getDeletedArticles(userId: number): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.baseApiUrl}/articles/getDeletedArticles/${userId}`);
  }

  public postArticle(article : Article): Observable<Article> {
    return this.httpClient.post<Article>(`${this.baseApiUrl}/articles`, article);
  }

  public markFavoriteArticle(userId: number, articleId : number): Observable<Article> {
    console.log(userId)
    console.log(articleId)
    return this.httpClient.put<Article>(`${this.baseApiUrl}/articles/markAsFavorite/${articleId}`, userId);
  }

  public unmarkFavoriteArticle(userId: number, articleId : number): Observable<Article> {
    console.log(userId)
    console.log(articleId)
    return this.httpClient.put<Article>(`${this.baseApiUrl}/articles/unmarkAsFavorite/${articleId}`, userId);
  }

  public editArticle(id: number, article : Article): Observable<Article> {
    return this.httpClient.put<Article>(`${this.baseApiUrl}/articles/${id}`, article);
  }

  public restoreDeletedArticle(id: number): Observable<Article> {
    return this.httpClient.put<Article>(`${this.baseApiUrl}/articles/restoreDeletedArticle/${id}`, null);
  }

  public getArticleById(id: number): Observable<Article> {
    return this.httpClient.get<Article>(`${this.baseApiUrl}/articles/${id}`)
  }

  public deleteArticle(id: number): Observable<Article> {
    return this.httpClient.delete<Article>(`${this.baseApiUrl}/articles/${id}`)
  }

  public filterArticles(filter: Filter): Observable<Article[]>{
    return this.httpClient.post<Article[]>(`${this.baseApiUrl}/articles/searchArticles`, filter)
  }
  
}
