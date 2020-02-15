import { Injectable } from '@angular/core';

@Injectable()
export class ApidataService {
public GetProducts() {
  return [
    {Name: 'Samsung TV', Price: 43666.99, Category: 'Electronics'},
    {Name: 'MI Mobile', Price: 12666.99, Category: 'Electronics'},
    {Name: 'Laptop', Price: 54786.99, Category: 'Electronics'},
    {Name: 'Lee Cooper Boot', Price: 3666.99, Category: 'Shoes'},
    {Name: 'Nike Casuals', Price: 5666.99, Category: 'Shoes'},
    {Name: 'Reebook Boot', Price: 6588.99, Category: 'Shoes'},
    {Name: 'Bata Sandals', Price: 688.99, Category: 'Shoes'}
  ];
}
}
