import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})

export class FoodlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource = [
  {
    id:"1",
  dishName:"Mutton Briyani",
  type:"NONVEG",
  price:"240"
},
{
  id:"2",
  dishName:"Chicken Briyani",
  type:"NONVEG",
  price:"160"
},
{
  id:"3",
dishName:"Curd Price",
  type:"VEG",
  price:"80"
},
{
id:"4",
dishName:"Chicken Noodles",
  type:"VEG",
  price:"80"
},
{
  id:"5",
  dishName:"Chicken 65",
    type:"VEG",
    price:"120"
}
]
}
