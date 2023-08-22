import { EnergyType } from '../Energy';
import Archertype from './Archetype';

export default class Ranger extends Archertype {
  static count = 0;
  private _energyType: EnergyType;

  constructor(n: string) {
    super(n);
    Ranger.count += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}