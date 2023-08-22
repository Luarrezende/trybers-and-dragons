import Energy from "../Energy"

export default interface Fighter {
  defense: number;
  energy?: Energy;
  lifePoints:number;
  strength:number;

  attack(enemy: Fighter): void;

  special(enemy: Fighter): void;

  receiveDamage(attackPoints: number): number;

  levelUp(): void;
}