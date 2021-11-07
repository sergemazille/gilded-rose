import { Item } from './items/constants.ts';
import { MutableItem } from './items/MutableItem.ts';

export class GildedRose {
  constructor(public items = [] as Array<Item>) {}

  update() {
    const mutableItems = this.items.filter(item => item instanceof MutableItem) as Array<MutableItem>;

    mutableItems.forEach(item => item.update());
  }
}
