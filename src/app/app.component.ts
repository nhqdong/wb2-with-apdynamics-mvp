import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'wb2-with-apdynamics-mvp';
  isEnabled = true;

  toggle() {
    this.isEnabled = !this.isEnabled;
  }
}
