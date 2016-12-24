import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
    //moduleId: module.id,
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;

    ngOnInit(): void{}

}