import { Rules } from '../rules/Rules.ts';

export enum ItemType {
  regularItem = 'RegularItem',
  agedBrie = 'AgedBrie',
}

export type ItemParams = { sellIn: number; quality: number; name: string; rules: Rules };