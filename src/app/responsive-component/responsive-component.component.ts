import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-responsive-component',
  template: '',
})
export class ResponsiveComponentComponent implements OnInit {
  constructor(private reponsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.reponsive
      .observe([Breakpoints.HandsetLandscape, Breakpoints.TabletLandscape])
      .subscribe((res) => {
        const breakpoints = res.breakpoints;

        if (breakpoints[Breakpoints.TabletLandscape]) {
          console.log('TabletLandscape screen active!');
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          console.log('HandsetLandscape screen active!');
        }
      });
  }
}
