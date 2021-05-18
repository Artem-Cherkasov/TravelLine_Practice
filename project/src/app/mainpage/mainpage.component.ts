import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/tag';
import { TagService } from '../tag.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  Tags: Tag[] = [];
  QuickTags: Tag[] = [];

  constructor(private tagService: TagService) {
   }

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
