import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';

/**
 * Tree view component responsible to draw tree structure with defined node definition
 * Input for tree should be in following format -
 *  data = [
 *    {
 *      '': '',
 *      'isExpanded': true or false,
 *      'items': [
 *        '': '',
 *        'isExpanded': true or false,
 *        'items': []
 *      ]
 *    }
 * ]
 */

@Component({
  selector: 'nmat-tree',
  templateUrl: './nmat-tree.component.html',
  styleUrls: ['./nmat-tree.component.scss'],
})
export class NmatTreeComponent implements OnInit {
  @Input() data: any = [];
  @Input() nestedItemKey = 'items';
  @Input() template = 'simple-tree'; // 'vertical-nodes' | 'simple-tree'
  @ContentChild(TemplateRef) parentTemplate!: any;

  constructor() {}

  ngOnInit() {}
}
