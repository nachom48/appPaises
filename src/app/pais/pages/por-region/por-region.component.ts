import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin:5px;

  }`
  ]
})
export class PorRegionComponent  {
  regiones:string[]= ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva:string ='';
  paises:Country[]=[];
  constructor(private paisesService:PaisService) { }

  activarRegion(region:string){

    if(region === this.regionActiva){return}
    this.regionActiva=region;
    this.paises=[]
    this.paisesService.buscarRegion(region)
      .subscribe(paises => this.paises=paises)

  }

  getClaseCss(region:string){
    return (region === this.regionActiva)
    ? 'btn btn-primary'
    :'btn-outline-primary';
  }






}

