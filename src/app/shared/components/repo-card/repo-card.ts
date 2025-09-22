import { Component, Input } from '@angular/core';
import { GithubRepo } from '../../models/github-repo.model';

@Component({
  selector: 'app-repo-card',
  imports: [],
  templateUrl: './repo-card.html',
  styleUrl: './repo-card.scss'
})
export class RepoCard {
  @Input() repos: GithubRepo[] = [];
}
