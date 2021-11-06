import { ItemParams, ItemType } from './constants.ts';

import { AgedBrieRules } from '../rules/AgedBrieRules.ts';
import { Item } from './Item.ts';
import { RegularRules } from '../rules/RegularRules.ts';
import { Rules } from '../rules/Rules.ts';

export class ItemFactory {
  static create(type: ItemType, args: Partial<ItemParams>): Item {
    const params = {
      ...args,
      ...this.getParamsFor(type),
    };

    const { sellIn, quality, name, rules } = params as ItemParams;

    return new Item(sellIn, quality, name, rules);
  }

  private static getParamsFor(type: ItemType): Record<string, number | string | Rules> {
    switch (type) {
      case ItemType.regularItem:
        return {
          rules: new RegularRules(),
        };

      case ItemType.agedBrie:
        return {
          name: 'Aged Brie',
          rules: new AgedBrieRules(),
        };

      default:
        return {};
    }
  }
}
