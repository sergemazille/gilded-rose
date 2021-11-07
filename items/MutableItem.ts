import { Rules } from '../rules/Rules.ts';
import { MutableItemProperties } from './constants.ts';

export class MutableItem {
  sellIn: number;
  quality: number;

  private constructor(sellIn: number, quality: number, public readonly name: string, public readonly rules: Rules) {
    this.rules.validateProperties({ quality });

    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    this.sellIn--;

    this.quality = this.rules.getUpdatedQuality(this);
  }

  static fromProperties(properties: MutableItemProperties) {
    const { sellIn, quality, name, rules } = properties;

    return new MutableItem(sellIn, quality, name, rules);
  }
}
