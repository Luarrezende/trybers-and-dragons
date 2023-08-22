import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _char1: Fighter;
  private _char2: Fighter;

  constructor(char1: Fighter, char2: Fighter) {
    super(char1);
    this._char1 = char1;
    this._char2 = char2;
  }

  fight(): number {
    while (
      this._char1.lifePoints > 0 && this._char2.lifePoints > 0
    ) {
      this._char2.attack(this._char1);
      this._char1.attack(this._char2);
    }
    return super.fight();
  }

}