import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nasa';

  constructor(
    public imgOfTheDay: NasaService
  ){}

  ngOnInit(): void {
    this.imgOfTheDay.getImageOfTheDay().subscribe(imageNasa => {
      this.imgOfTheDay = imageNasa.url;
    });
  }
}
