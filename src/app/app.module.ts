import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { MyanimationsComponent } from './myanimations/myanimations.component';
import { ImageanimationsComponent } from './imageanimations/imageanimations.component';


@NgModule({
  declarations: [
    AppComponent,
    MyanimationsComponent,
    ImageanimationsComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
