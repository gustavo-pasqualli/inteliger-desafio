import { Component, Input } from '@angular/core';
import { GithubUser } from '../../models/github-user.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-card',
  imports: [
    ButtonModule
  ],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss'
})
export class UserCard {
  @Input() user!: GithubUser;
}
