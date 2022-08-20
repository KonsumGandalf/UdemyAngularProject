import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class recipeComponent implements OnInit {
  @Input() selectedRecipe?: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
