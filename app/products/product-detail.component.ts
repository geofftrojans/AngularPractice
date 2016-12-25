import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        this._productService.getProduct(id)
            .subscribe(inputProduct => this.product = inputProduct,
                        error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

}