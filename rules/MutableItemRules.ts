import { MutableItem } from '../items/MutableItem.ts';

export abstract class MutableItemRules {
  validateProperties({ quality }: { quality: number }): void {
    if (quality < 0) {
      throw new Error("Quality can't be set to a negative value");
    }

    if (quality > 50) {
      throw new Error("Quality can't be set to a value greater than 50");
    }
  }

  protected clampWithinLimits(newQuality: number): number {
    if (newQuality < 0) {
      return 0;
    }

    if (newQuality > 50) {
      return 50;
    }

    return newQuality;
  }

  abstract getUpdatedQuality(item: MutableItem): number;
}
