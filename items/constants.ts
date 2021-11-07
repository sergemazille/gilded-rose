import { MutableItem } from './MutableItem.ts';
import { Rules } from '../rules/Rules.ts';

export type Item = MutableItem;

export enum ItemType {
  regularItem = 'RegularItem',
  agedBrie = 'AgedBrie',
}

export type MutableItemProperties = { sellIn: number; quality: number; name: string; rules: Rules };
