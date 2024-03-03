import { Injectable } from '@angular/core';
import {ListCoins} from '../../interface/ListCoins.interface'
import { DetailCoin } from '../../interface/DetailCoin.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http:HttpClient) { }

  getAllCoins(){
   
    return this.http.get<ListCoins[]>('https://api.coingecko.com/api/v3/markets?vs_currency=usd')
    
  }

  getDetail(id: any):Observable <DetailCoin[]>{
    return this.http.get<DetailCoin[]>( 'https://api.coingecko.com/api/v3/coins/'+ id)
  }

}
