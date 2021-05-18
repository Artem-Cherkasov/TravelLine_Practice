import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/tag';
import { TagService } from '../tag.service';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  QuickTags: Tag[] = [];

  Recipes: Recipe[] = [
    {id: 1, image: "assets/Images/Strawberry.png", tags: this.QuickTags, fav: 10, like: 8, name: 'Клубничная панна-котта', description: 'Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.', time: '35 мин', person: '5 персон'},
    {id: 2, image: "assets/Images/Meat.png", tags: this.QuickTags, fav: 4, like: 7, name: 'Мясные фрикадельки', description: 'Мясные фрикадельки в томатном соусе - несложное и вкусное блюдо, которым можно порадовать своих близких.', time: '90 мин', person: '4 персоны'},
    {id: 3, image: "assets/Images/Pancakes.png", tags: this.QuickTags, fav: 25, like: 7, name: 'Панкейки', description: 'Панкейки: меньше, чем блины, но больше, чем оладьи. Основное отличие — в тесте, оно должно быть воздушным, чтобы панкейки не растекались по сковородке...', time: '40 мин', person: '3 персоны'},
    {id: 4, image: "assets/Images/IceCream.png", tags: this.QuickTags, fav: 4, like: 7, name: 'Полезное Мороженое Без Сахара', description: 'Йогуртовое мороженое сочетает в себе нежный вкус и низкую калорийность, что будет особенно актуально для сладкоежек, соблюдающих диету.', time: '35 мин', person: '2 персоны'},
  ];

  Tags: Tag[] = [];
  SearchString: string = '';

  constructor(private tagService: TagService) { }

  getTags(): void {
    this.tagService.getTags()
      .subscribe(data => this.Tags = data);
  }
  
  getQuickTags(): void {
    this.tagService.getQuickTags()
      .subscribe(data => this.QuickTags = data);
  } 

  ngOnInit(): void {
    this.getTags();
    this.getQuickTags();
  }


}
