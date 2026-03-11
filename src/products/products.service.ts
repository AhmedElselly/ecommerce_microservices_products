import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return [
      { id: 1, name: 'iPhone 15', price: 1000 },
      { id: 2, name: 'Samsung S24', price: 900 },
    ];
  }
}
