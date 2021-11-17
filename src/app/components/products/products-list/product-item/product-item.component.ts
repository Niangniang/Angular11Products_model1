import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product.model";
import {ActionEvent, ProductActionTypes} from "../../../../state/product.state";
import {EventDriverService} from "../../../../services/event_driver.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() product: Product | null =  null;
//@Output() eventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor( private eventDrivenService: EventDriverService) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
//this.eventEmitter.emit({type: ProductActionTypes.SELECT_PRODUCT, payload:product});
    this.eventDrivenService.publishEvent({type: ProductActionTypes.SELECT_PRODUCT, payload:product});
  }

  onDelete(product: Product) {
    //this.eventEmitter.emit({type: ProductActionTypes.DELETE_PRODUCT, payload:product});
    this.eventDrivenService.publishEvent({type: ProductActionTypes.DELETE_PRODUCT, payload:product});

  }

  onEdit(product: Product) {
   // this.eventEmitter.emit({type: ProductActionTypes.EDIT_PRODUCT, payload:product});
    this.eventDrivenService.publishEvent({type: ProductActionTypes.EDIT_PRODUCT, payload:product});

  }
}
