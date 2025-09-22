import { Component, Input } from '@angular/core';
import { GithubUser } from '../../models/github-user.model';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss'
})
export class UserCard {
  @Input() user!: GithubUser;
}
