import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/tag';
import { TagService } from '../tag.service';
import { Recipe } from 'src/recipe';
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

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(data => this.Recipes = data);
  } 

  ngOnInit(): void {
    this.getTags();
    this.getQuickTags();
    this.getRecipes();
  }


}
