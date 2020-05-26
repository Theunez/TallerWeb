import { Component, OnInit } from '@angular/core';
import { VillanoService } from '../../service/villano.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-villano-search',
  templateUrl: './villano-search.component.html',
  styleUrls: ['./villano-search.component.css']
})
export class VillanoSearchComponent implements OnInit {

  villano: any[] = [];
  busqueda: string;
  constructor( private _villanoService:VillanoService,
               private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe( params=>{
      this.busqueda = params['busqueda'];
      this.villano = this._villanoService.buscarVillano(params['busqueda']);
    })
  }

}
