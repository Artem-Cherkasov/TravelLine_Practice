import { Injectable } from '@angular/core';
import { Tag } from 'src/tag';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor() { }

  getTags(): Observable<Tag[]> {
    return  of([
      { id: 1, icon: "assets/Images/Book.png", name: 'Простые блюда', description: 'Время приготвления таких блюд не более 1 часа'},
      { id: 2, icon: "assets/Images/Vector.png", name: 'Детское', description: 'Самые полезные блюда которые можно детям любого возраста'},
      { id: 3, icon: "assets/Images/Chief.png", name: 'От шеф-поваров', description: 'Требуют умения, времени и терпения, зато как в ресторане'},
      { id: 4, icon: "assets/Images/Holiday.png", name: 'На праздник', description: 'Чем удивить гостей, чтобы все были сыты за праздничным столом'},
    ]);
  }

  getQuickTags(): Observable<Tag[]> {
    return  of([
      {id: 1, name: 'мясо', description: '', icon: ''},
      {id: 2, name: 'деликатесы', description: '', icon: '' },
      {id: 3, name: 'пироги', description: '', icon: '' },
      {id: 4, name: 'рыба', description: '', icon: ''},
      {id: 5, name: 'пост', description: '', icon: '' },
      {id: 6, name: 'пасха2021', description: '', icon: '' },
      ]);
  }
}
