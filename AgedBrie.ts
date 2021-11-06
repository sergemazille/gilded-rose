import { Item } from './Item.ts';

export class AgedBrie {
  item: Item;

  constructor(private readonly _sellIn: number, private readonly _quality: number) {
    const name = 'Aged Brie';
    this.item = new Item(_sellIn, _quality, name);
  }

  get sellIn() {
    return this.item.sellIn;
  }

  get quality() {
    return this.item.quality;
  }

  update() {
    this.item.sellIn--;

    if (this.item.sellIn < 0) {
      const updatedQuality = this.item.quality - 2;
      this.item.updateQuality(updatedQuality);

      return;
    }

    const updatedQuality = this.item.quality + 1;
    this.item.updateQuality(updatedQuality);
  }
}
