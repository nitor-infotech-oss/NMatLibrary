import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'N Material Explorer';
  testData = [
    {
      title: 'Root',
      isExpanded: true,
      items: [
        {
          title: 'Child 1',
          isExpanded: true,
          items: []
        },
        {
          title: 'Child 2',
          isExpanded: true,
          items: [
            {
              title: 'Child 2 1',
              isExpanded: true,
              items: []
            },
            {
              title: 'Child 2 2',
              isExpanded: true,
              items: [
                {
                  title: 'Child 2 2 1',
                  isExpanded: true,
                  items: []
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  testData2 = [];

  exampleHtml1 = `
  <nmat-tree [data]="testData" [template]="'simple-tree'">
    <ng-template let-item>
      <div>{{item.title}}</div>
    </ng-template>
  </nmat-tree>`;

  exampleHtml2 = `
  <nmat-tree [data]="testData" [template]="'vertical-nodes'">
    <ng-template let-item>
      <div class="node">{{item.title}}</div>
    </ng-template>
  </nmat-tree>`;

  constructor() { }

  ngOnInit() {
    this.testData2 = JSON.parse(JSON.stringify(this.testData));
  }
}
