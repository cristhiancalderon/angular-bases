import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {



  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power:10
  }]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index: number):void{
    //TODO: EMITIR EL ID DEL PERSONAJE
    this.onDelete.emit(index);
    console.log({index});
  }

}
