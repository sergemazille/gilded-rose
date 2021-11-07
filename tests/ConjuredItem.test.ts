import { assert, assertEquals } from 'https://deno.land/std@0.113.0/testing/asserts.ts';

import { ItemFactory } from '../items/ItemFactory.ts';
import { ItemType } from '../items/constants.ts';
import { MutableItem } from '../items/MutableItem.ts';

const createConjuredItem = ({ sellIn = 1, quality = 1 } = { sellIn: 1, quality: 1 }) => {
  const name = 'Conjured Item';

  return ItemFactory.create(ItemType.conjuredItem, { sellIn, quality, name });
};

Deno.test('a Conjured Item is a MutableItem', () => {
  const item = createConjuredItem();

  assert(item instanceof MutableItem);
});

Deno.test('a Conjured Item quality decrease by two on every update', () => {
  const quality = 4;
  const item = createConjuredItem({ quality });

  item.update();

  assertEquals(item.quality, 2);
});

Deno.test('a Conjured Item quality decrease by four when sellIn becomes negative on every update', () => {
  const sellIn = 0;
  const quality = 6;
  const item = createConjuredItem({ sellIn, quality });

  item.update();

  assertEquals(item.quality, 2);
});