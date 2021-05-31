import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  Recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
  ) { }

    getFavRecipes(): void {              
      console.log("getRecipes");
      this.recipeService.getFavRecipes(this.Recipes.length)
        .subscribe(data => this.Recipes = this.Recipes.concat(data));
    }


  ngOnInit(): void {
    this.getFavRecipes();
  }

}
