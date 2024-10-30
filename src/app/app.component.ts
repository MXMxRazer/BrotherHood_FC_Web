import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.router.routerState.snapshot.root.fragment; 
      if (fragment) {
        const element = document.getElementById(fragment);
        console.log(`Fra: ${fragment}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start'}); 
        }
      }
    }); 

    this.router.navigate(['/']); 
  }
  
  title = 'FC Northen Yetis';

  public images = [
    {
      imgSrc:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      imgAlt: 'Image 1',
    },
    {
      imgSrc:
        'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      imgAlt: 'Image 2',
    },
    {
      imgSrc:
        'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      imgAlt: 'Image 3',
    },
  ];
}
