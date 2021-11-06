import { assertEquals, assertThrows } from 'https://deno.land/std@0.113.0/testing/asserts.ts';
import { ItemType } from '../items/constants.ts';
import { ItemFactory } from '../items/ItemFactory.ts';

const createAgedBrie = ({ sellIn = 1, quality = 1 }) => {
  return ItemFactory.create(ItemType.agedBrie, { sellIn, quality });
};
Deno.test('an Aged Brie quality increase by one on every update', () => {
  const quality = 1;
  const item = createAgedBrie({ quality });

  item.update();

  assertEquals(item.quality, 2);
});

Deno.test('an Aged Brie sellIn decrease by one on update', () => {
  const sellIn = 1;
  const item = createAgedBrie({ sellIn });

  item.update();

  assertEquals(item.sellIn, 0);
});

Deno.test('an Aged Brie quality decrease by two when sellIn becomes negative on every update', () => {
  const sellIn = 0;
  const quality = 2;
  const item = createAgedBrie({ sellIn, quality });

  item.update();

  assertEquals(item.quality, 0);
});

Deno.test('an Aged Brie quality updated to a negative value will default to 0', () => {
  const sellIn = 0;
  const quality = 0;
  const item = createAgedBrie({ sellIn, quality });

  item.update();

  assertEquals(item.quality, 0);
});

Deno.test('an Aged Brie quality can not be set to a negative value', () => {
  const quality = -1;

  assertThrows(() => {
    createAgedBrie({ quality });
  });
});

Deno.test('an Aged Brie quality can not be set to a value greater than 50', () => {
  const quality = 51;

  assertThrows(() => {
    createAgedBrie({ quality });
  });
});
