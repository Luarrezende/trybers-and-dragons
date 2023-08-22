import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(n: string, d: number) {
    super(n, d);
    Dwarf.count += 1;
    this._maxLifePoints = 80;;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}