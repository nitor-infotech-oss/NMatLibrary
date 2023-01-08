import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[nmat-tree-node]',
  templateUrl: './nmat-tree-node.component.html',
  styleUrls: ['./nmat-tree-node.component.css'],
})
export class NmatTreeNodeComponent implements OnInit {
  @Input() item: any;
  @Input() template!: TemplateRef<any>;
  @Input() dataKey: any;

  constructor() {}

  ngOnInit() {}
}
