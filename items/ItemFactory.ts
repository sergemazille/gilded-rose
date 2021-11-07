import { AgedBrieRules } from '../rules/AgedBrieRules.ts';
import { Item } from './constants.ts';
import { ItemType } from './constants.ts';
import { MutableItem } from './MutableItem.ts';
import { MutableItemProperties } from './constants.ts';
import { RegularRules } from '../rules/RegularRules.ts';

export class ItemFactory {
  static create(type: ItemType, args: Partial<Item>): Item {
    let properties;

    switch (type) {
      case ItemType.regularItem:
        properties = {
          ...args,
          rules: new RegularRules(),
        } as MutableItemProperties;

        return MutableItem.fromProperties(properties);

      case ItemType.agedBrie:
        properties = {
          ...args,
          name: 'Aged Brie',
          rules: new AgedBrieRules(),
        } as MutableItemProperties;

        return MutableItem.fromProperties(properties);
    }
  }
}
