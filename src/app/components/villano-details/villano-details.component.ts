import { Component, OnInit } from '@angular/core';
import { VillanoService ,Villano  } from '../../service/villano.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-villano-details',
  templateUrl: './villano-details.component.html',
  styles: [
  ]
})
export class VillanoDetailsComponent implements OnInit {

  villano:any = [];
   imgCasa:string;

  constructor(private _activeRoute: ActivatedRoute, private _villanoService:VillanoService) {
   
    this._activeRoute.params.subscribe( params=>{
      //console.log(params['id']);
      this.villano = this._villanoService.getVillano(params['id']);
    })
   }
  ngOnInit(): void {
  }
  

}
