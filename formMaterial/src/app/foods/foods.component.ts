import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  ngOnInit(): void {
  }
  userForm:FormGroup;

  constructor (){
    this.userForm = new FormGroup({
      'name': new FormControl('',Validators.required),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'gender':new FormControl("female",Validators.required),

      'favfood':new FormArray([
        new FormGroup({
          'indian': new FormControl(true,Validators.required)
        }),
        new FormGroup({
          'chinese' : new FormControl(false,Validators.required)
        })
      ]),
      'addresses':new FormArray([
       this.createAddress()
      ])
    })
  }
  addAddress(){
    alert("Adds a Address block");
    let addressArray = this.userForm.get('addresses') as FormArray;   
    addressArray.push(this.createAddress())
  }
  createAddress(){
    return new FormGroup({
      'line1': new FormControl('',Validators.required),
      'line2': new FormControl('',Validators.required),
      'country': new FormControl('',Validators.required),
      'state':new FormControl('',Validators.required),
      'city': new FormControl('',Validators.required)
    })
  }
  closeBlock(index){

    alert(index);

    let removeBlock = this.userForm.get("addresses") as FormArray;

    removeBlock.removeAt(index);
  }
  submitForm(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
  }
  foodList=[
    {
    dishName:"Mutton Briyani",
    type:"NONVEG",
    price:"20"
  },
  {
    dishName:"Chicken Briyani",
    type:"NONVEG",
    price:"20"
  },
  {
  dishName:"Curd Price",
    type:"VEG",
    price:"40"
  }
]
styleExp='center';
}
