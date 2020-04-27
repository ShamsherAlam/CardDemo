import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [{
    imageUrl : 'assets/1.jpeg',
    title : 'Actress 1',
    description : 'Model 1'
  },
  {
    imageUrl : 'assets/2.jpeg',
    title : 'Actress 2',
    description : 'Model 2'
  },{
    imageUrl : 'assets/3.jpeg',
    title : 'Actress 3',
    description : 'Model 3'
  },{
    imageUrl : 'assets/4.jpeg',
    title : 'Actress 4',
    description : 'Model 4'
  },{
    imageUrl : 'assets/5.jpeg',
    title : 'Actress 5',
    description : 'Model 5'
  },{
    imageUrl : 'assets/6.jpeg',
    title : 'Actress 6',
    description : 'Model 6'
  }
];
}
