import { Component, OnInit } from '@angular/core';
import { Tag } from '../../tag';
import { TagService } from '../tag.service';
import { Recipe } from '../../recipe';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  QuickTags: Tag[] = [];

  Recipes: Recipe[] = [];

  Tags: Tag[] = [];
  SearchString: string = '';
  Tag: string = '';


  constructor(
    private tagService: TagService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  getTags(): void {
    this.tagService.getTags()
      .subscribe(data => this.Tags = data);
  }

  getQuickTags(): void {
    this.tagService.getQuickTags()
      .subscribe(data => this.QuickTags = data);
  }

  getRecipes(): void {                //метод getRecipes проверяет наличие поисковой строки и не пуста ли переменная Tag, если сработало условие
    if (this.SearchString) {          //поисковой строки то возвращается массив findRecipes, если тег то массив getRecipesByTags, если же оба 
      console.log("findRecipes");     //условия ложны то возвращается массив getRcipes
      this.recipeService.findRecipes(this.SearchString, this.Recipes.length)
        .subscribe(data => this.Recipes = this.Recipes.concat(data));
    }
    else if (this.Tag) {
      console.log("getRecipesByTags");
      this.recipeService.getRecipesByTags(this.Tag, this.Recipes.length)
        .subscribe(data => this.Recipes = this.Recipes.concat(data));
    }
    else {
      console.log("getRecipes");
      this.recipeService.getRecipes(this.Recipes.length)
        .subscribe(data => this.Recipes = this.Recipes.concat(data));
    }
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.getTags();
    this.getQuickTags();
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.getAll('searchString')!)
    ).subscribe(data => {
      this.SearchString = data;
    });
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.getAll('tag')!)
    ).subscribe(data => {
      this.Tag = data;
    });
    this.getRecipes();
  }

  onSearchStringChange(): void { //метод onSearchString проверяет поисквую строку при нажатии на кнопку, если она не пустая очищает массив рецептов,
    if (this.SearchString) {     //переменную тега и выполняет метод getRecipes.
      this.Recipes = [];
      this.Tag = '';
      this.getRecipes();
    }
  }

  onTagClick(tag: string): void {  //метод onTagClick при нажатии на один из тегов, предаёт название тега в переменную, очищает массив 
    console.log("onTagClick");     //рецептов и поисковую строку.
    this.Recipes = [];
    this.SearchString = '';
    this.Tag = tag;
    this.getRecipes();
  }
}
