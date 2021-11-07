import { ImmutableItem } from './ImmutableItem.ts';
import { MutableItem } from './MutableItem.ts';
import { Rules } from '../rules/Rules.ts';

export type Item = MutableItem | ImmutableItem;

export enum ItemType {
  regularItem = 'RegularItem',
  agedBrie = 'AgedBrie',
  sulfuras = 'Sulfuras',
}

export type MutableItemProperties = { sellIn: number; quality: number; name: string; rules: Rules };
export type ImmutableItemProperties = { quality: number; name: string; rules: Rules };

export const sulfurasQuality = 80;
