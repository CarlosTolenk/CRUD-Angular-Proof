import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';

//Modules
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module'


@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
