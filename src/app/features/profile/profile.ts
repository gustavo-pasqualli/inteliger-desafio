import { Component, DestroyRef, inject } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { Header } from "../../shared/components/header/header";
import { GithubUserService } from '../../core/services/github-user.service';
import { GithubUser } from '../../shared/models/github-user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UserCard } from "../../shared/components/user-card/user-card";
import { RepoCard } from '../../shared/components/repo-card/repo-card';
import { GithubRepo } from '../../shared/models/github-repo.model';
import { Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, finalize, of, tap } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    Header,
    UserCard,
    RepoCard
],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  private githubUserService = inject(GithubUserService);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);

  username: string = '';
  repos: GithubRepo[] = [];
  user!: GithubUser;
  loading = false;

  ngOnInit() {
    if (history.state?.data) {
      this.user = history.state?.data;
      this.listReposByGithubUser();
      history.replaceState({}, '', window.location.href);
      return;
    }

    this.router.navigate(['/home']);
  }

  onSubmit() {
    const search = this.username?.trim();
    this.loading = true;

    this.listGithubUser(search);
  }

  listGithubUser(search: string) {
    this.githubUserService.listGithubUser(search).pipe(
      takeUntilDestroyed(this.destroyRef),
      tap((data: GithubUser) => {
        this.user = data;
        this.listReposByGithubUser();
        this.username = "";
      }),
      catchError(err => {
        return of(null);
      }),
      finalize(() => (this.loading = false))
    )
    .subscribe();
  }

  listReposByGithubUser() {
    const username = this.user?.login;
    if(!username) return

    this.githubUserService.listReposByGithubUser(username).subscribe({
      next: (data: GithubRepo[]) => {
        this.repos = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
      }
    })
  }
}
