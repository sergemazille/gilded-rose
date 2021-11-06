import { assertEquals, assertNotEquals, assertThrows } from 'https://deno.land/std@0.113.0/testing/asserts.ts';

import { Item } from './Item.ts';

Deno.test('an Item Quality can be updated', () => {
  const sellIn = 1;
  const quality = 1;
  const name = 'Standart Item';
  const item = new Item(sellIn, quality, name);

  item.updateQuality(2);

  assertEquals(item.quality, 2);
});

Deno.test('an Item Quality updated to a negative value will default to 0', () => {
  const sellIn = 1;
  const quality = 1;
  const name = 'Standart Item';
  const item = new Item(sellIn, quality, name);

  item.updateQuality(-1);

  assertEquals(item.quality, 0);
});

Deno.test('an Item Quality can not be set to a negative value', () => {
  const sellIn = 1;
  const quality = -1;
  const name = 'Standart Item';

  assertThrows(() => {
    new Item(sellIn, quality, name);
  });
});

Deno.test('an Item Quality updated to a value greater than 50 will default to 50', () => {
  const sellIn = 1;
  const quality = 1;
  const name = 'Standart Item';
  const item = new Item(sellIn, quality, name);

  item.updateQuality(51);

  assertEquals(item.quality, 50);
});

Deno.test('an Item Quality can not be set to a value greater than 50', () => {
  const sellIn = 1;
  const quality = 51;
  const name = 'Standart Item';

  assertThrows(() => {
    new Item(sellIn, quality, name);
  });
});