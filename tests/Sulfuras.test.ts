import { ImmutableItem } from '../items/ImmutableItem.ts';
import { ItemFactory } from '../items/ItemFactory.ts';
import { ItemType } from '../items/constants.ts';
import { assertEquals, assert } from 'https://deno.land/std@0.113.0/testing/asserts.ts';

Deno.test("Sulfuras' properties are conform to specifications", () => {
  const sulfuras = ItemFactory.create(ItemType.sulfuras);

  assert(sulfuras instanceof ImmutableItem);
  assertEquals(sulfuras.quality, 80);
  assertEquals(sulfuras.name, 'Sulfuras');
});
