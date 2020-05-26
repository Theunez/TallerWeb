import { Component, OnInit } from '@angular/core';
import { VillanoService,Villano } from '../../service/villano.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styles: [
  ]
})
export class VillanosComponent implements OnInit {
  
  // hero:any[]=[];
  villano:Villano[]=[];
  constructor( private _heroService: VillanoService, private _router: Router) { 
  }

  ngOnInit(): void {
    this.villano = this._heroService.getVillanos();
    console.log(this.villano);
  }
  
  verVillano(id:number){
    this._router.navigate(['/detalles',id]);
  }
}
