import { MutableItem } from '../items/MutableItem.ts';
import { ImmutableItem } from '../items/ImmutableItem.ts';
import { ItemFactory } from '../items/ItemFactory.ts';
import { ItemType } from '../items/constants.ts';
import { assertEquals, assert } from 'https://deno.land/std@0.113.0/testing/asserts.ts';

Deno.test('creation of a mutable item', () => {
  const itemProperties = { sellIn: 1, quality: 1, name: 'whatever' };
  const regularItem = ItemFactory.create(ItemType.regularItem, itemProperties);

  assertEquals(regularItem.name, 'whatever');
  assert(regularItem instanceof MutableItem);
});

Deno.test('creation of an immutable item', () => {
  const sulfuras = ItemFactory.create(ItemType.sulfuras);

  assert(sulfuras instanceof ImmutableItem);
});
