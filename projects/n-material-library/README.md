# NMaterialLibrary

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

This is angular based custom material library project.

This package includes following material modules -
NMat Tree Module (nmat-tree) : this gives you a tree structure layout with 2 types of template orientation which is quite flexible to extend and have your own node designs for complex data structures and don't have limitation on levels.

## Installation

Install the package in your angular application:

```shell
$ npm install n-material-library
```

## To use this widget

Import Module: NmatTreeModule 
Usage: 
```shell
<nmat-tree [data]="testData" [template]="'simple-tree'">
  <ng-template let-item>
    <div>{{item.title}}</div>
  </ng-template>
</nmat-tree>
```
Input:
template => right now it offers two templates as an input source 'simple-tree' & 'vertical-nodes'. Based on template passed you can see different visual outputs.
data => this requires data in following format which is used to generate the layout which is common for all tempalates.
```shell
[
  {
    title: 'Root',
    isExpanded: true,
    items: [
      {
        title: 'Child',
        isExpanded: true,
        items: []
      }
    ]
  }
]
```
