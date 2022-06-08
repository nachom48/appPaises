import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  paises:Country[]=[];
  termino:string ='';
  hayError:boolean=false;
  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;


    this.paisService.buscarCapital(termino)
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
    //TODO crear sugerencias
  }
}
