import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';

  featureselected: string = 'recipe';

  onFeatureSelected(event: string){
    this.featureselected = event;
  }

}
