import { MutableItem } from '../items/MutableItem.ts';
import { MutableItemRules } from './MutableItemRules.ts';

export class BackstagePassesRules extends MutableItemRules {
  getUpdatedQuality(item: MutableItem) {
    const { sellIn, quality } = item;

    if (sellIn < 0) {
      return 0;
    }

    if (sellIn > 5) {
      const newQuality = quality + 2;
      const updatedQuality = this.clampWithinLimits(newQuality);

      return updatedQuality;
    }

    const newQuality = quality + 3;
    const updatedQuality = this.clampWithinLimits(newQuality);

    return updatedQuality;
  }
}
