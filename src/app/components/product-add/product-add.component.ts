import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  submitted: boolean  = false;
  productFormGroup: FormGroup  =
    this.fb.group({
      name: ["", Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required],
    });
  constructor(private fb: FormBuilder, private  productsService: ProductsService) { }

  ngOnInit(): void {


  }

  onSaveProduct() {
    this.submitted=true;
    if (this.productFormGroup.invalid) return;
  this.productsService.save(this.productFormGroup?.value)
    .subscribe(data=>{
      alert("Operation fait avec success !");
    });
  }
}
