import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedMageComponent } from './red-mage/red-mage.component';
import { SummonerComponent } from './summoner/summoner.component';
import { BlackMageComponent } from './black-mage/black-mage.component';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragoonComponent } from './dragoon/dragoon.component';
import { MonkComponent } from './monk/monk.component';
import { ReaperComponent } from './reaper/reaper.component';
import { NinjaComponent } from './ninja/ninja.component';
import { SamuraiComponent } from './samurai/samurai.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    RedMageComponent,
    SummonerComponent,
    BlackMageComponent,
    DragoonComponent,
    MonkComponent,
    ReaperComponent,
    NinjaComponent,
    SamuraiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
