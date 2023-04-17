import {Component, Input} from '@angular/core';
import {Character} from "../../../domain/character.interface";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  private _character?: Character;
  @Input() set character(character: Character | undefined) {
    this._character = character;
  };
  get character() {
    return this._character;
  }

}
