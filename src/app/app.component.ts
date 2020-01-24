import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DynamicScriptLoaderService} from './script-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'wb2-with-apdynamics-mvp';
  isEnabled = true;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {
  }

  ngOnInit() {
    this.loadScripts();
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
  }

  private loadScripts() {
    this.dynamicScriptLoader.load('appdynamics').then(data => {
      console.log('appdynamics script loaded');
    }).catch(error => console.log(error));
  }
}
