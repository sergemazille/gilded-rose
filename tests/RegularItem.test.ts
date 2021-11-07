import { assert, assertEquals } from 'https://deno.land/std@0.113.0/testing/asserts.ts';

import { ItemFactory } from '../items/ItemFactory.ts';
import { ItemType } from '../items/constants.ts';
import { MutableItem } from '../items/MutableItem.ts';

const createRegularItem = ({ sellIn = 1, quality = 1 } = { sellIn: 1, quality: 1 }) => {
  const name = 'Regular Item';

  return ItemFactory.create(ItemType.regularItem, { sellIn, quality, name });
};

Deno.test('a regular item is a MutableItem', () => {
  const item = createRegularItem();

  assert(item instanceof MutableItem);
});

Deno.test('a regular item quality decrease by one on every update', () => {
  const quality = 2;
  const item = createRegularItem({ quality });

  item.update();

  assertEquals(item.quality, 1);
});

Deno.test('a regular item quality decrease by two when sellIn becomes negative on every update', () => {
  const sellIn = 0;
  const quality = 2;
  const item = createRegularItem({ sellIn, quality });

  item.update();

  assertEquals(item.quality, 0);
});