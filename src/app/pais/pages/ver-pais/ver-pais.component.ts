import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/paises.service';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']

})
export class VerPaisComponent implements OnInit {
  //con el ! te digo q el pais puede ser nulo
  pais! : Country;
//el activated route viene con lo necsario paraubscribirnos
//al cambio q pueda haber en el URL
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService   : PaisService
    ) { }

    ngOnInit(): void {
      console.log(this.pais)
      this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.paisService.getPaisPorCodigo( id )  ),
          
        )
        .subscribe( pais => this.pais = pais[0] );

    }



    // this.activatedRoute.params
    //     .subscribe(({id}) =>{
    //       console.log(id);
    //     this.paisService.getPaisPorCodigo(id)
    //        .subscribe(pais=>{
    //          console.log(pais)
    //        })
    //        })
  }


