import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Accordion, AccordionGroup} from './accordion';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, Accordion, AccordionGroup],
  exports: [HeaderComponent, Accordion, AccordionGroup]

})
export class SharedModule { }
