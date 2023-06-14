import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name = 'Abdalazeem';
  loadedFeature = 'Recipes';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
