import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  promocaoUrl = 'http://localhost:3000/promotions';

  constructor(private http: HttpClient) { }

  listar(){

    return this.http.get<any[]>(`${this.promocaoUrl}`);
  }

}
