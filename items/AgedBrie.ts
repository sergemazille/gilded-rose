import { AgedBrieRules } from '../rules/AgedBrieRules.ts';
import { Item } from './Item.ts';

export class AgedBrie {
  item: Item;
  public readonly name = 'Aged Brie';

  constructor(private readonly _sellIn: number, private readonly _quality: number) {
    const regularRules = new AgedBrieRules();

    this.item = new Item(_sellIn, _quality, regularRules);
  }

  get sellIn() {
    return this.item.sellIn;
  }

  get quality() {
    return this.item.quality;
  }

  update() {
    this.item.update();
  }
}
