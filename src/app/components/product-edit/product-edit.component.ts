import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventDriverService} from "../../services/event_driver.service";
import {ProductActionTypes} from "../../state/product.state";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
productId: number;
productFormGroup?:FormGroup
  submitted: boolean = false;
  constructor( private activatedRoute: ActivatedRoute,
               private productsservice: ProductsService,
               private fb: FormBuilder,
               private eventDrivenService: EventDriverService
               ) {
    this.productId= activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productsservice.getProduct(this.productId )
      .subscribe(product=>{
        this.productFormGroup=this.fb.group({
          id:[product.id,Validators.required],
          name:[product.name,Validators.required],
          price:[product.price,Validators.required],
          quantity:[product.quantity,Validators.required],
          selected:[product.selected,Validators.required],
          available:[product.available,Validators.required]
        })
      });
  }

  onUpdateProduct() {
this.productsservice.updateProduct(this.productFormGroup?.value)
  .subscribe(data=>{
    this.eventDrivenService.publishEvent({type: ProductActionTypes.EDIT_PRODUCT});
    alert("Success product updated !")
  })

  }
}
