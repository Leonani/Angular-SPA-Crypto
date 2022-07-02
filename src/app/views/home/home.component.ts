import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/coinGecko/api.service'
import {Router} from '@angular/router'
import { ListCoins } from 'src/app/interface/ListCoins.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  list!:ListCoins[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllCoins().subscribe(data => {
      this.list = data
    })
  }

  enterDetail(id: any) {
    // console.log(id)
    this.router.navigate(['detail',id])
  }

}
