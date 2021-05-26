import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/recipe';
import { Tag } from 'src/tag';
import { RecipeService } from '../recipe.service';
import { TagService } from '../tag.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  Tags: Tag[] = [];
  QuickTags: Tag[] = [];
  SearchString: string = '';
  DailyRecipe: Recipe;
  

  constructor(
    private recipeService: RecipeService,
    private tagService: TagService
    ) {}

   getTags(): void {
    this.tagService.getTags()
      .subscribe(data => this.Tags = data);
  } 

  getQuickTags(): void {
    this.tagService.getQuickTags()
      .subscribe(data => this.QuickTags = data);
  }
  
  getDailyRecipe(): void {
    this.recipeService.getDailyRecipe()
      .subscribe(data => this.DailyRecipe = data)
  }

  ngOnInit(): void {
    this.getTags();
    this.getQuickTags();
    this.getDailyRecipe();
  }
}
