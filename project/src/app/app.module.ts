import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RouterModule } from '@angular/router';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    RecipelistComponent,
    FavoritesComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainpageComponent },
      { path: 'main', component: MainpageComponent },
      { path: 'list', component: RecipelistComponent },
      { path: 'favs', component: FavoritesComponent },
      { path: 'recipe', component: RecipeComponent },
      { path: 'list/:searchString', component: RecipelistComponent }
    ])
  ],
  exports: [ RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
