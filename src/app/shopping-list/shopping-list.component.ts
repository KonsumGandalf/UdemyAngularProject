import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Coffee Beans", 8),
    new Ingredient("Espresso Beans", 2),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newIngredient: Ingredient): void {
    console.log(newIngredient);
    this.ingredients  = [...this.ingredients, newIngredient];
  }

}
