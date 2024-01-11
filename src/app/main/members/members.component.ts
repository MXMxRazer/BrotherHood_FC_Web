import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  protected memberList: { name: String; position: String; context: String }[];

  constructor() {
    this.memberList = [
      {
        name: 'Bishal Shrestha',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: 'Bishal Shrestha',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: 'Bishal Shrestha',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: 'Bishal Shrestha',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: 'Bishal Shrestha',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: 'Bishal Shrestha',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: 'Bishal Shrestha',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: 'Bishal Shrestha',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
    ];
  }
}
