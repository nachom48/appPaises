import { Component, EventEmitter, Output,OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit{
  @Output() onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  //esto es para recibir 
  @Input() placeholder: string = '';
  debouncer:Subject<string>=new Subject();
  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    //aca le digo q no emita el subscribe hasta q ese observable deje de emitir valores por los proximos 300 milesimas de segundos
    .subscribe( valor =>{
        this.onDebounce.emit(valor)
    })
    //esto se dispara una sola vez cuando el componente se crea
  }
  //aca estoy creando un evento para q emita,
  //event emitter  ,new event emitter de tipo string
  //
  termino:string='';
  //es un observable especial
buscar(){
  this.onEnter.emit(this.termino);
}
 teclaPresionada(){
  this.debouncer.next(this.termino);
 }
}
