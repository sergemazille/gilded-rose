import { assertEquals, assertThrows } from 'https://deno.land/std@0.113.0/testing/asserts.ts';
import { ItemType } from '../items/constants.ts';
import { ItemFactory } from '../items/ItemFactory.ts';

const createMutableItem = ({ sellIn = 1, quality = 1 }) => {
  const name = 'Mutable Item';

  return ItemFactory.create(ItemType.regularItem, { sellIn, quality, name });
};

Deno.test('a mutable item sellIn decrease by one on update', () => {
  const sellIn = 1;
  const item = createMutableItem({ sellIn });

  item.update();

  assertEquals(item.sellIn, 0);
});

Deno.test('a mutable item quality updated to a negative value will default to 0', () => {
  const quality = 0;
  const item = createMutableItem({ quality });

  item.update();

  assertEquals(item.quality, 0);
});

Deno.test('a mutable item quality can not be set to a negative value', () => {
  const quality = -1;

  assertThrows(() => {
    createMutableItem({ quality });
  });
});

Deno.test('a mutable item quality can not be set to a value greater than 50', () => {
  const quality = 51;

  assertThrows(() => {
    createMutableItem({ quality });
  });
});
