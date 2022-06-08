import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `
    li{
      cursor:pointer;
    }`
  ]
})
export class PorPaisComponent {

  paises:Country[]=[];
  termino:string ='';
  paisesSugeridos:Country[]=[];
  hayError:boolean=false;
  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;


    this.paisService.buscarPais(termino)
    .subscribe((paises)=>
    {this.paises=paises
    console.log(paises)
  },

    (err) =>{
      this.hayError=true;
      this.paises=[]
    }   )
    ;
  }

  borrarError(){
    this.hayError=false;
  }

  sugerencias(termino:string){
    this.hayError=false;

    this.paisService.buscarPais(termino)
    .subscribe(paises=>this.paisesSugeridos=paises.splice(0,3),
    (err)=>this.paisesSugeridos=[])
    
  }
}
// )
