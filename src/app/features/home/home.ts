import { GithubUserService } from './../../core/services/github-user.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubUser } from '../../shared/models/github-user.model';

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
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  username: string = '';

  onSubmit() {
    this.githubUserService.listGithubUser(this.username).subscribe({
      next: (data: GithubUser) => {
        this.redirectProfile(data);
      }
    })
  }

  redirectProfile(data: GithubUser) {
    this.router.navigate(['/perfil'], {
      relativeTo: this.route,
      state: { data: data }
    });
  }
}
