import { assert, assertEquals } from 'https://deno.land/std@0.113.0/testing/asserts.ts';

import { ItemFactory } from '../items/ItemFactory.ts';
import { ItemType } from '../items/constants.ts';
import { MutableItem } from '../items/MutableItem.ts';

const createAgedBrie = ({ sellIn = 1, quality = 1 } = { sellIn: 1, quality: 1 }) => {
  return ItemFactory.create(ItemType.agedBrie, { sellIn, quality });
};

Deno.test('a regular item is a MutableItem', () => {
  const item = createAgedBrie();

  assert(item instanceof MutableItem);
});

Deno.test('an Aged Brie quality increase by one on every update', () => {
  const quality = 1;
  const item = createAgedBrie({ quality });

  item.update();

  assertEquals(item.quality, 2);
});

Deno.test('an Aged Brie quality decrease by two when sellIn becomes negative on every update', () => {
  const sellIn = 0;
  const quality = 2;
  const item = createAgedBrie({ sellIn, quality });

  item.update();

  assertEquals(item.quality, 0);
});
