import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id:string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar );

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  // @Input({required: true}) name!: string;
  // alternatively wa can use: avatar = input.required<string>();

  @Output() select = new EventEmitter<string>(); 
  // we can use: select = output<string>();

  get imagePath() {
      return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
