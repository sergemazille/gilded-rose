import { assertEquals } from 'https://deno.land/std@0.113.0/testing/asserts.ts';

import { AgedBrie } from './AgedBrie.ts';

Deno.test('the quality of an Aged Brie increase every day', () => {
  const sellIn = 2;
  const quality = 1;
  const agedBrie = new AgedBrie(sellIn, quality);

  agedBrie.update();

  assertEquals(agedBrie.quality, 2);
});

Deno.test('the quality of an Aged Brie decreased by 2 every day after sell in', () => {
  const sellIn = 0;
  const quality = 2;
  const agedBrie = new AgedBrie(sellIn, quality);

  agedBrie.update();

  assertEquals(agedBrie.quality, 0);
});