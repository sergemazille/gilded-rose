import { ImmutableItemProperties, MutableItemProperties } from './constants.ts';
import { ItemType, sulfurasQuality } from './constants.ts';

import { AgedBrieRules } from '../rules/AgedBrieRules.ts';
import { ImmutableItem } from './ImmutableItem.ts';
import { Item } from './constants.ts';
import { MutableItem } from './MutableItem.ts';
import { RegularRules } from '../rules/RegularRules.ts';
import { SulfurasRules } from '../rules/SulfurasRules.ts';

export class ItemFactory {
  static create(type: ItemType, args?: Partial<Item>): any {
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

      case ItemType.sulfuras:
        properties = {
          quality: sulfurasQuality,
          name: 'Sulfuras',
          rules: new SulfurasRules(),
        } as ImmutableItemProperties;

        return ImmutableItem.fromProperties(properties);
    }
  }
}
