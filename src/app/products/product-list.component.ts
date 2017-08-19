import { Component } from '@angular/core';

@Component ({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    products: any[] = [
        { 'productId': 2, 'productName': 'Garden Cart', 'productCode': 'GDN0023', 'releaseDate': 'March 18, 2016', 'description': '5 gallon capacity rolling', 'price': 32.99, 'startRating': 4.2, 'imageurl': 'http://openclipart.org/image/300/'},
        { 'productId': 5, 'productName': 'Hammer', 'productCode': 'TBS0048', 'releaseDate': 'March 21, 2016', 'description': 'Curved claw steel Hammer', 'price': 8.9, 'startRating': 4.8, 'imageurl': 'http://openclipart.org/image/300/'}
    ];
}