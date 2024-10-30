import { Component, OnInit } from '@angular/core';

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
        name: '1',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: '2a',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: '3',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: '4',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: '5',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: '6',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: '7',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
      {
        name: '8',
        position: 'FWD, Commity Lead',
        context:
          'Head of the commity, doing everything possible for the growth of organization, additionally leading the sports side of the club to triumpyt.',
      },
    ];
  }
}
