import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class recipeDetailComponent implements OnInit {
  @Input()  public recipe!: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
