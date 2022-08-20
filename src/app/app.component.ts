import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  servers: any[] = [];
  title = 'udemy-second-project';
  loadedFeature = '';

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
