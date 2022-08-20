import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() public recipeSelectedList = new EventEmitter<Recipe>();
  recipes: Recipe[]= [
    new Recipe("TestCoffee", "A coffee is jummy", "https://th.bing.com/th/id/R.474731073596d7d7ca2804ee28d3e7c1?rik=Hpv%2bYQ%2bVQhuVKQ&pid=ImgRaw&r=0"),
    new Recipe("TestCoffee", "A coffee is jummy", "https://th.bing.com/th/id/R.474731073596d7d7ca2804ee28d3e7c1?rik=Hpv%2bYQ%2bVQhuVKQ&pid=ImgRaw&r=0"),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log(recipe);
    this.recipeSelectedList.emit(recipe);
  }

}
