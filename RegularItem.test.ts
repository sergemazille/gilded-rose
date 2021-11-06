import { assertEquals, assertThrows } from 'https://deno.land/std@0.113.0/testing/asserts.ts';
import { RegularItem } from './RegularItem.ts';

const createRegularItem = ({ sellIn = 1, quality = 1 }) => {
  const name = 'Regular Item';

  return new RegularItem(sellIn, quality, name);
};

Deno.test('a regular item quality decrease by one on every update', () => {
  const quality = 2;
  const item = createRegularItem({ quality });

  item.update();

  assertEquals(item.quality, 1);
});

Deno.test('a regular item sellIn decrease by one on update', () => {
  const sellIn = 1;
  const item = createRegularItem({ sellIn });

  item.update();

  assertEquals(item.sellIn, 0);
});

Deno.test('a regular item quality decrease by two when sellIn becomes negative on every update', () => {
  const sellIn = 0;
  const quality = 2;
  const item = createRegularItem({ sellIn, quality });

  item.update();

  assertEquals(item.quality, 0);
});

Deno.test('a regular item quality updated to a negative value will default to 0', () => {
  const quality = 0;
  const item = createRegularItem({ quality });

  item.update();

  assertEquals(item.quality, 0);
});

Deno.test('a regular item quality can not be set to a negative value', () => {
  const quality = -1;

  assertThrows(() => {
    createRegularItem({ quality });
  });
});

Deno.test('a regular item quality can not be set to a value greater than 50', () => {
  const quality = 51;

  assertThrows(() => {
    createRegularItem({ quality });
  });
});
