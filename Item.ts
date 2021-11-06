export class Item {
  sellIn: number;
  quality: number;

  constructor(sellIn: number, quality: number, public readonly name: string) {
    if (quality < 0) {
      throw new Error("Quality can't be set to a negative value");
    }

    if (quality > 50) {
      throw new Error("Quality can't be set to a value greater than 50");
    }

    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality(newQuality: number) {
    if (newQuality < 0 || newQuality > 50) {
      return;
    }

    this.quality = newQuality;
  }
}
