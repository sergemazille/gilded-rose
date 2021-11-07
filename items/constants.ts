import { ImmutableItemRules, MutableItemRules } from '../rules/constants.ts';

import { ImmutableItem } from './ImmutableItem.ts';
import { MutableItem } from './MutableItem.ts';

export type Item = MutableItem | ImmutableItem;

export enum ItemType {
  regularItem = 'RegularItem',
  agedBrie = 'AgedBrie',
  sulfuras = 'Sulfuras',
  backstagePasses = 'BackstagePasses',
}

export type MutableItemProperties = { sellIn: number; quality: number; name: string; rules: MutableItemRules };
export type ImmutableItemProperties = { quality: number; name: string; rules: ImmutableItemRules };

export const sulfurasQuality = 80;
