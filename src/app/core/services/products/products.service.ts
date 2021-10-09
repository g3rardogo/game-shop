import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(
      'https://free-to-play-games-database.p.rapidapi.com/api/games?rapidapi-key=51aa869b86mshac1babc9b43eb28p145dacjsn9c4b4c1d4a54'
    );
  }

  getProduct(id: string) {
    return this.http.get(`https://www.freetogame.com/api/game?id=${id}`);
  }
}
