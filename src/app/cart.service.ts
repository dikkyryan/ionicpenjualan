import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Horor',
      expanded: true,
      products: [
        { id: 0, name: 'Munafik', price: '34.000', imageUrl : '/assets/1.png' },
        { id: 1, name: 'Silsilah Keluarga Setan', price: '41.000', imageUrl : '/assets/2.png' },
        { id: 2, name: 'Danur', price: '24.000', imageUrl : '/assets/3.png' },
        { id: 3, name: 'Rumah Berhantu', price: '27.000', imageUrl : '/assets/4.png' }
      ]
    },
    {
      category: 'Romance',
      products: [
        { id: 4, name: 'Hujan Bulan Juni', price: '24.000', imageUrl : '/assets/5.jpg'},
        { id: 5, name: 'Cinta Yang Di Acuhkan', price: '14.000', imageUrl : '/assets/6.jpg'},
		{ id: 6, name: 'Pernak Pernik Romantis', price: '56.000', imageUrl : '/assets/7.jpg' },
		{ id: 7, name: 'Kisah Romantis Rasululluah', price: '43.000', imageUrl : '/assets/8.jpg' }
      ]
    },
	{
      category: 'Comedy ',
      products: [
        { id: 8, name: 'Kitab Suci', price: '35.000', imageUrl : '/assets/9.jpg'},
		{ id: 9, name: 'Stand Up Comedy', price: '20.000', imageUrl : '/assets/10.jpg' },
		{ id: 10, name: 'Comedy Of Juno', price: '81.000', imageUrl : '/assets/11.jpg' },
        { id: 11, name: 'Ingin Menjadi Pelawak', price: '62.000', imageUrl : '/assets/12.jpg' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}