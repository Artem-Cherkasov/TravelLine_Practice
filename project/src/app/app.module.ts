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
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    RecipelistComponent,
    FavoritesComponent,
    RecipeComponent,
    ProfileComponent
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
      { path: 'recipe/:id', component: RecipeComponent },
      { path: 'list/:searchString', component: RecipelistComponent },
      { path: 'listByTag/:tag', component: RecipelistComponent },
      { path: 'profile', component: ProfileComponent },
    ])
  ],
  exports: [ RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
