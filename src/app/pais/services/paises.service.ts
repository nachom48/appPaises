import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  Observable, of } from "rxjs";
import { Country } from "../interfaces/pais.interface";

@Injectable({
  providedIn:'root'
})
export class PaisService{




  constructor(private http:HttpClient){

  }
  private apiUrl:string='https://restcountries.com/v3.1';

//le pongo las llaves cuadradas xq es un observable que emite un arreglo de paises
  buscarPais(termino:string=''):Observable<Country[]>{
    const url=`${this.apiUrl}/name/${termino}`;
    termino=termino.trim().toLocaleLowerCase();
     return this.http.get<Country[]>(url)
  }

  buscarCapital(termino:string=''):Observable<Country[]>{
    const url=`${this.apiUrl}/capital/${termino}`;
    termino=termino.trim().toLocaleLowerCase();
     return this.http.get<Country[]>(url)
  }


  getPaisPorCodigo(id:string=''):Observable<Country[]>{
    const url=`${this.apiUrl}/alpha/${id}`;
     return this.http.get<Country[]>(url)
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url=`${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url)
  }
}


