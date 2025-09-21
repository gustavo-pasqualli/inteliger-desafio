import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubUser } from '../../shared/models/github-user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {
  url = environment.apiUrl;

  http = inject(HttpClient);

  listGithubUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(this.url + `users/${username}`);
  }

  listReposByGithubUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(this.url + `users/${username}/repos`);
  }
}
