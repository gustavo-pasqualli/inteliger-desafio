import { Component, Input } from '@angular/core';
import { GithubRepo } from '../../models/github-repo.model';
import { TimeAgoPipe } from '../../pipes/timeago.pipe';

@Component({
  selector: 'app-repo-card',
  imports: [
    TimeAgoPipe
  ],
  templateUrl: './repo-card.html',
  styleUrl: './repo-card.scss'
})
export class RepoCard {
  @Input() repos: GithubRepo[] = [];
}
