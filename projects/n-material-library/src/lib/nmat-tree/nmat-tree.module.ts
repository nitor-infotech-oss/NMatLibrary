import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NmatTreeComponent } from './nmat-tree.component';
import { NmatTreeNodeComponent } from './nmat-tree-node/nmat-tree-node.component';

@NgModule({
  declarations: [NmatTreeComponent, NmatTreeNodeComponent],
  imports: [
    CommonModule
  ],
  exports: [NmatTreeComponent]
})
export class NmatTreeModule { }
