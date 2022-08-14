import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class recipeItemComponent implements OnInit {
  @Input() public name: string = "";
  @Input() public description: string = "";
  @Input() public imgPath: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
