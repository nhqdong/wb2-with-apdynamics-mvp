# Wb2WithApdynamicsMvp

A minimum replication of wb2 component + *ngIf issue while using appdynamics lib. 

Problem: if we eager-load App Dynamic script in index.hml, the Workbench 2 (wb2) components cannot be re-initialized inside *ngIf container **only in Internet Explorer & MS Edge**

Work-around: defer App Dynamic script to be loaded after Angular/Web Component initialize.

*Note: wb2 components are Web Components built with Stencil (https://stenciljs.com/).*

## Project Setup
Please run npm -i and view `http://localhost:4200/` in Internet Explorer / MS Edge.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Change log
- Change App Dynamic script version to v4.5.17
- Defer App Dynamic script to be loaded after Angular/Web Component initialize.
