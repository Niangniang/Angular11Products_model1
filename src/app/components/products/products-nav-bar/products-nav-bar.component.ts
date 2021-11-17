import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionTypes} from "../../../state/product.state";
import {EventDriverService} from "../../../services/event_driver.service";


@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
//@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();
  constructor(
    private  eventDrivenService: EventDriverService
  ) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
  //this.productEventEmitter.emit({type: ProductActionTypes.GET_ALL_PRODUCTS});
    this.eventDrivenService.publishEvent({type: ProductActionTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts() {
    //this.productEventEmitter.emit({type: ProductActionTypes.GET_SELECTED_PRODUCTS});
    this.eventDrivenService.publishEvent({type: ProductActionTypes.GET_SELECTED_PRODUCTS});

  }

 onGetAvailableProducts() {
     // this.productEventEmitter.emit({type: ProductActionTypes.GET_AVAILABLE_PRODUCTS});
   this.eventDrivenService.publishEvent({type: ProductActionTypes.GET_AVAILABLE_PRODUCTS});

  }

  onNewProduct() {
     // this.productEventEmitter.emit({type: ProductActionTypes.NEW_PRODUCT});
    this.eventDrivenService.publishEvent({type: ProductActionTypes.NEW_PRODUCT});

  }

  onSearch(dataForm: any) {
    /*
      this.productEventEmitter.emit(
        {type: ProductActionTypes.SEARCH_PRODUCTS, payload:dataForm}); */

    this.eventDrivenService.publishEvent({type: ProductActionTypes.SEARCH_PRODUCTS, payload:dataForm})
  }


}
