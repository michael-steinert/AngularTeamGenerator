import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  memberName: string = '';
  members: string[] = [];
  errorMessage: string = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  addMember(): void {
    if (!this.memberName) {
      this.errorMessage = 'Name can not be empty';
      return;
    }
    this.members.push(this.memberName);
    this.memberName = '';
    this.errorMessage = '';
  }

  onMemberInput(memberInput: string): void {
    this.memberName = memberInput;
  }

  onNumberOfTeamsInput(numberOfTeamsInput: string): void {
    this.numberOfTeams = Number(numberOfTeamsInput);
  }

  generateTeams() {
    this.teams = [];
    const allMembers = [...this.members];
    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough Team Members';
      return;
    }
    this.errorMessage = '';
    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numberOfTeams = '';
  }
}
