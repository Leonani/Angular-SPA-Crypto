import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/coinGecko/api.service'
import {ActivatedRoute, Router, Params} from '@angular/router'
import { DetailCoin } from 'src/app/interface/DetailCoin.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  detail:any;
  id: any;

  constructor(private api:ApiService, private router:Router, private routeActive:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id']
    this.routeActive.params.subscribe((params:Params) => {
      this.id = params['id']
    })
    this.api.getDetail(this.id).subscribe(data => {
     
      this.detail = data
      console.log(data)
      
    })

  }

}
