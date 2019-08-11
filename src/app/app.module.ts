import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [DialogComponent],
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(DialogComponent, {injector: this.injector});
    customElements.define('carlitos-dialog', el);
  }

}
