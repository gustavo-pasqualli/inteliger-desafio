import { GithubUserService } from './../../core/services/github-user.service';
import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GithubUser } from '../../shared/models/github-user.model';
import { catchError, finalize, of, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private githubUserService = inject(GithubUserService);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);

  username = '';
  loading = false;

  onSubmit() {
    const search = this.username?.trim();

    this.loading = true;

    this.githubUserService.listGithubUser(search).pipe(
      takeUntilDestroyed(this.destroyRef),
      tap((data: GithubUser) => this.redirectProfile(data)),
      catchError(err => {
        return of(null);
      }),
      finalize(() => (this.loading = false))
    )
    .subscribe();
  }

  redirectProfile(data: GithubUser) {
    if (!data) return;

    this.router.navigate(['/perfil'], {
      state: { data }
    });
  }
}
