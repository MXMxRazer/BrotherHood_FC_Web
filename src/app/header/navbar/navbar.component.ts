import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    let decreaseFontSize: boolean = false;
    let increasePadding: boolean = false;

    let change;

    this.responsive
      .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
      .subscribe((res) => {
        const bp = res.breakpoints;

        if (bp[Breakpoints.HandsetPortrait]) {
          decreaseFontSize = true;
          increasePadding = true;
        }
      });

    throw new Error('Method not implemented.');
  }
}
