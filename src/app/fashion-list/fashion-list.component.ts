import { Component } from '@angular/core';

@Component({
  selector: 'app-fashion-list',
  templateUrl: './fashion-list.component.html',
  styleUrls: ['./fashion-list.component.less'],
})
export class FashionListComponent {
  fashionData = [
    {
      name: 'Fashionable Shirt',
      price: 39.99,
      image: 'shirt.jpg',
    },
    {
      name: 'Elegant Dress',
      price: 89.99,
      image: 'dress.jpg',
    },
  ];

  deleteFashionItem(index: number) {
    this.fashionData.splice(index, 1);
  }
}
