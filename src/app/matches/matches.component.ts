import { Component } from '@angular/core';

export interface MatchDetails {
  date: number;
  day: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamLogo: string;
  awayTeamLogo: string;
  occurence: string;
}

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent {
  prevMatch: MatchDetails;
  currMatch: MatchDetails;
  nextMatch: MatchDetails;

  constructor() {
    this.prevMatch = {
      date: 20,
      day: 'THUR',
      homeTeam: 'Rogers',
      awayTeam: 'Toronto',
      homeTeamLogo: '111',
      awayTeamLogo: '222',
      occurence: 'PREV',
    };
    this.currMatch = {
      date: 20,
      day: 'THUR',
      homeTeam: 'Rogers',
      awayTeam: 'Toronto',
      homeTeamLogo: '111',
      awayTeamLogo: '222',
      occurence: 'CURR',
    };
    this.nextMatch = {
      date: 20,
      day: 'THUR',
      homeTeam: 'Rogers',
      awayTeam: 'Toronto',
      homeTeamLogo: '111',
      awayTeamLogo: '222',
      occurence: 'NEXT',
    };
  }
}
