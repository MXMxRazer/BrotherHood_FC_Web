import { Component } from '@angular/core';

@Component({
  selector: 'app-status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.scss'],
})
export class StatusBoardComponent {
  active_members = 200;
  sponsors_count = 8;
  championship_won = 2;
}
