import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackMageComponent } from './black-mage/black-mage.component';
import { RedMageComponent } from './red-mage/red-mage.component';
import { SummonerComponent } from './summoner/summoner.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
