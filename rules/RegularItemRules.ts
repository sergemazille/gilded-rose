import { MutableItem } from '../items/MutableItem.ts';
import { MutableItemRules } from './MutableItemRules.ts';

export class RegularItemRules extends MutableItemRules {
  getUpdatedQuality(item: MutableItem) {
    const { sellIn, quality } = item;

    if (sellIn < 0) {
      const newQuality = quality - 2;
      const updatedQuality = this.clampWithinLimits(newQuality);

      return updatedQuality;
    }

    const newQuality = quality - 1;
    const updatedQuality = this.clampWithinLimits(newQuality);

    return updatedQuality;
  }
}
