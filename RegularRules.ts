import { Rules } from './Rules.ts';
import { Item } from './Item.ts';

export class RegularRules implements Rules {
  validateProperties({ quality }: Partial<Item>): void {
    if (quality! < 0) {
      throw new Error("Quality can't be set to a negative value");
    }

    if (quality! > 50) {
      throw new Error("Quality can't be set to a value greater than 50");
    }
  }

  getUpdatedQuality(item: Item) {
    const { sellIn, quality } = item;

    if (sellIn < 0) {
      const newQuality = quality - 2;
      const updatedQuality = this.updateQuality(newQuality);

      return updatedQuality;
    }

    const newQuality = quality -1;
    const updatedQuality = this.updateQuality(newQuality);

    return updatedQuality;
  }

  updateQuality(newQuality: number): number {
    if (newQuality < 0) {
      return 0;
    }

    if (newQuality > 50) {
      return 50;
    }

    return newQuality;
  }
}
