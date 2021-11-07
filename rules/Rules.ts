import { Item } from '../items/Item.ts';

export interface Rules {
  validateProperties(item: Partial<Item>): void;
  getUpdatedQuality(item: Item): number;
}