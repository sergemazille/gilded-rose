import { Rules } from '../rules/Rules.ts';

export class Item {
  sellIn: number;
  quality: number;

  constructor(sellIn: number, quality: number, private readonly rules: Rules) {
    this.rules.validateProperties({ quality });

    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    this.sellIn--;

    this.quality = this.rules.getUpdatedQuality(this);
  }
}
