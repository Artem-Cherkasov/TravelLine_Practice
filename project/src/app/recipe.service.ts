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
      {id: 1, image: "assets/Images/Strawberry.png", tags: [], fav: 10, like: 8, name: 'Клубничная панна-котта', description: 'Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.', time: '35 мин', person: '5 персон', ingridient: [], step: [] },
      { id: 2, image: "assets/Images/Meat.png", tags: [], fav: 4, like: 7, name: 'Мясные фрикадельки', description: 'Мясные фрикадельки в томатном соусе - несложное и вкусное блюдо, которым можно порадовать своих близких.', time: '90 мин', person: '4 персоны', ingridient: [], step: [] },
      { id: 3, image: "assets/Images/Pancakes.png", tags: [], fav: 25, like: 7, name: 'Панкейки', description: 'Панкейки: меньше, чем блины, но больше, чем оладьи. Основное отличие — в тесте, оно должно быть воздушным, чтобы панкейки не растекались по сковородке...', time: '40 мин', person: '3 персоны', ingridient: [], step: [] },
      { id: 4, image: "assets/Images/IceCream.png", tags: [], fav: 4, like: 7, name: 'Полезное Мороженое Без Сахара', description: 'Йогуртовое мороженое сочетает в себе нежный вкус и низкую калорийность, что будет особенно актуально для сладкоежек, соблюдающих диету.', time: '35 мин', person: '2 персоны', ingridient: [], step: [] },
    ]);
  }

  getRecipe(id: number): Observable<Recipe> {
    return of(
      {
        id: 1, image: "assets/Images/Strawberry.png", tags: [], fav: 10, like: 8, name: 'Клубничная панна-котта', description: 'Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.', time: '35 мин', person: '5 персон',
        ingridient: [
          {title: "Для панна котты", description: "Сливки-20-30% - 500мл. Молоко - 100мл. Желатин - 2ч.л. Сахар - 3ст.л. Ванильный сахар - 2 ч.л."},
          {title: "Для клубничного желе", description: "Сливки-20-30% - 500мл. Молоко - 100мл. Желатин - 2ч.л. Сахар - 3ст.л. Ванильный сахар - 2 ч.л."}
        ],
       step: [
        {title: "Шаг 1", description: "Приготовим панна котту: Зальем желатин молоком и поставим на 30 минут для набухания. В сливки добавим сахар и ванильный сахар. Доводим до кипения (не кипятим!)."},
        {title: "Шаг 2", description: "Добавим в сливки набухший в молоке желатин. Перемешаем до полного растворения. Огонь отключаем. Охладим до комнатной температуры."},
        {title: "Шаг 3", description: "Разольем охлажденные сливки по креманкам и поставим в холодильник до полного застывания. Это около 3-5 часов."},
        {title: "Шаг 4", description: "Приготовим клубничное желе: Клубнику помоем, очистим от плодоножек. Добавим сахар. Взбиваем клубнику с помощью блендера в пюре."},
        {title: "Шаг 5", description: "Добавим в миску с желатином 2ст.ложки холодной воды и сок лимона. Перемешаем и поставим на 30 минут для набухания. Доведем клубничное пюре до кипения. Добавим набухший желатин, перемешаем до полного растворения. Огонь отключаем. Охладим до комнатной температуры."},
        {title: "Шаг 6", description: "Сверху на застывшие сливки добавим охлажденное клубничное желе. Поставим в холодильник до полного застывания клубничного желе. Готовую панна коту подаем с фруктами."},   
       ] }
    );
  }

  findRecipes(SearchString: string): Observable<Recipe[]> {
    return of([
      { id: 1, image: "assets/Images/Strawberry.png", tags: [], fav: 10, like: 8, name: 'Клубничная панна-котта', description: 'Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.', time: '35 мин', person: '5 персон', ingridient: [], step: [] },
      { id: 2, image: "assets/Images/Meat.png", tags: [], fav: 4, like: 7, name: 'Мясные фрикадельки', description: 'Мясные фрикадельки в томатном соусе - несложное и вкусное блюдо, которым можно порадовать своих близких.', time: '90 мин', person: '4 персоны', ingridient: [], step: [] },
      { id: 3, image: "assets/Images/Pancakes.png", tags: [], fav: 25, like: 7, name: 'Панкейки', description: 'Панкейки: меньше, чем блины, но больше, чем оладьи. Основное отличие — в тесте, оно должно быть воздушным, чтобы панкейки не растекались по сковородке...', time: '40 мин', person: '3 персоны', ingridient: [], step: [] },
      { id: 4, image: "assets/Images/IceCream.png", tags: [], fav: 4, like: 7, name: 'Полезное Мороженое Без Сахара', description: 'Йогуртовое мороженое сочетает в себе нежный вкус и низкую калорийность, что будет особенно актуально для сладкоежек, соблюдающих диету.', time: '35 мин', person: '2 персоны', ingridient: [], step: [] },
    ]);
  }

  getDailyRecipe(): Observable<Recipe[]> {
    return of([
      {id: 1, image: "assets/Images/Dish.png", tags: [], fav: 10, like: 356, name: 'Тыквенный супчик на кокосовом молоке', description: 'Если у вас осталась тыква, и вы не знаете что с ней сделать, то это решение для вас! Ароматный, согревающий суп-пюре на кокосовом молоке. Можно даже в Пост!', time: '35 мин', person: '5 персон', ingridient: [], step: [] },
    ]);
  }


}
