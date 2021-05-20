import { Injectable } from '@angular/core';
import { Recipe } from 'src/recipe';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  QuickTags = [];
  

  constructor() { }

  getRecipes(offsetNumber: number): Observable<Recipe[]> {
    return of([
      {
        id: 1, image: "assets/Images/Strawberry.png", tags: [
          { id: 1, icon: "assets/Images/Book.png", name: 'Простые блюда', description: 'Время приготвления таких блюд не более 1 часа' },
        { id: 2, icon: "assets/Images/Vector.png", name: 'Детское', description: 'Самые полезные блюда которые можно детям любого возраста' },
        ],
         fav: 10, like: 8, name: 'Клубничная панна-котта', description: 'Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.', time: '35 мин', person: '5 персон'
      },
      { id: 2, image: "assets/Images/Meat.png", tags: [], fav: 4, like: 7, name: 'Мясные фрикадельки', description: 'Мясные фрикадельки в томатном соусе - несложное и вкусное блюдо, которым можно порадовать своих близких.', time: '90 мин', person: '4 персоны' },
      { id: 3, image: "assets/Images/Pancakes.png", tags: [], fav: 25, like: 7, name: 'Панкейки', description: 'Панкейки: меньше, чем блины, но больше, чем оладьи. Основное отличие — в тесте, оно должно быть воздушным, чтобы панкейки не растекались по сковородке...', time: '40 мин', person: '3 персоны' },
      { id: 4, image: "assets/Images/IceCream.png", tags: [], fav: 4, like: 7, name: 'Полезное Мороженое Без Сахара', description: 'Йогуртовое мороженое сочетает в себе нежный вкус и низкую калорийность, что будет особенно актуально для сладкоежек, соблюдающих диету.', time: '35 мин', person: '2 персоны' },
    ]);
  }

  getRecipe(id: number): Observable<Recipe> {
    return of(
      {
        id: 1, image: "assets/Images/Strawberry.png", tags: [
          { id: 1, icon: "assets/Images/Book.png", name: 'Простые блюда', description: 'Время приготвления таких блюд не более 1 часа' },
        { id: 2, icon: "assets/Images/Vector.png", name: 'Детское', description: 'Самые полезные блюда которые можно детям любого возраста' },
        ],
         fav: 10, like: 8, name: 'Клубничная панна-котта', description: 'Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.', time: '35 мин', person: '5 персон'
      }
    );
  }

  findRecipes(SearchString: string): Observable<Recipe[]> {
    return of([
      { id: 1, image: "assets/Images/Strawberry.png", tags: [], fav: 10, like: 8, name: 'Клубничная панна-котта', description: 'Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.', time: '35 мин', person: '5 персон' },
      { id: 2, image: "assets/Images/Meat.png", tags: [], fav: 4, like: 7, name: 'Мясные фрикадельки', description: 'Мясные фрикадельки в томатном соусе - несложное и вкусное блюдо, которым можно порадовать своих близких.', time: '90 мин', person: '4 персоны' },
      { id: 3, image: "assets/Images/Pancakes.png", tags: [], fav: 25, like: 7, name: 'Панкейки', description: 'Панкейки: меньше, чем блины, но больше, чем оладьи. Основное отличие — в тесте, оно должно быть воздушным, чтобы панкейки не растекались по сковородке...', time: '40 мин', person: '3 персоны' },
      { id: 4, image: "assets/Images/IceCream.png", tags: [], fav: 4, like: 7, name: 'Полезное Мороженое Без Сахара', description: 'Йогуртовое мороженое сочетает в себе нежный вкус и низкую калорийность, что будет особенно актуально для сладкоежек, соблюдающих диету.', time: '35 мин', person: '2 персоны' },
    ]);
  }

}
