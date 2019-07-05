import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Promocao } from './promocao';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private readonly promocaoUrl = 'http://localhost:3000/promotions';

  constructor(private http: HttpClient) { }

  listar(){

    return this.http.get<Promocao[]>(this.promocaoUrl);
  }
}
