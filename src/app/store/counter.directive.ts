import {
  Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appCounter]'
})

export class CounterDirective {
  constructor(private container: ViewContainerRef, private tempalte: TemplateRef<Object>) {

  }

  @Input('appCounter')
  appCounter: number;

  // ngOnChanges(changes: SimpleChanges) {
  //   this.container.clear();
  //   for (let i = 0; i < this.appCounter; i++) {
  //     this.tempalte.createEmbeddedView(new CounterDirectiveContext(i + 1));
  //     // this.tempalte.createEmbeddedView(this.template,
  //     //     new CounterDirectiveContext(i+1));
  //   }
  // }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) {
  }
}
