import { assert, assertEquals } from 'https://deno.land/std@0.113.0/testing/asserts.ts';

import { ItemFactory } from '../items/ItemFactory.ts';
import { ItemType } from '../items/constants.ts';
import { MutableItem } from '../items/MutableItem.ts';

const createItem = ({ sellIn = 1, quality = 1 } = { sellIn: 1, quality: 1 }) => {
  const name = "Backstage passes to a TAFKAL80ETC concert"

  return ItemFactory.create(ItemType.backstagePasses, { sellIn, quality, name });
};

Deno.test('a backstage passes item is a MutableItem', () => {
  const item = createItem();

  assert(item instanceof MutableItem);
});

Deno.test('a backstage passes item quality increase by two on every update if sellIn is greater than 5', () => {
  const sellIn = 7;
  const quality = 1;
  const item = createItem({ sellIn, quality });

  item.update();

  assertEquals(item.sellIn, 6);
  assertEquals(item.quality, 3);
});

Deno.test('a backstage passes item quality increase by three on every update if sellIn is 5 or less', () => {
  const sellIn = 6;
  const quality = 1;
  const item = createItem({ sellIn, quality });

  item.update();

  assertEquals(item.sellIn, 5);
  assertEquals(item.quality, 4);
});

Deno.test('a backstage passes item quality drops to zero after sellIn', () => {
  const sellIn = 0;
  const quality = 9;
  const item = createItem({ sellIn, quality });

  item.update();

  assertEquals(item.sellIn, -1);
  assertEquals(item.quality, 0);
});