import { Item } from './Item.ts';
import { RegularRules } from '../rules/RegularRules.ts';

export class RegularItem {
  item: Item;

  constructor(private readonly _sellIn: number, private readonly _quality: number, public readonly name: string) {
    const regularRules = new RegularRules();

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
