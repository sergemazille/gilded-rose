import { Item, ItemType } from '../items/constants.ts';

import { GildedRose } from '../GildedRose.ts';
import { ItemFactory } from '../items/ItemFactory.ts';
import { MutableItem } from '../items/MutableItem.ts';
import { assertEquals } from 'https://deno.land/std@0.113.0/testing/asserts.ts';

const extractProperties = (items: Item[]) => {
  return items.map(item => {
    const { quality, name } = item;
    const sellIn = item instanceof MutableItem ? item.sellIn : undefined;

    return {
      ...(sellIn && { sellIn }),
      quality,
      name,
    };
  });
};

Deno.test('extractProperties', () => {
  const regularItem = ItemFactory.create(ItemType.regularItem, { name: '+5 Dexterity Vest', sellIn: 10, quality: 20 });
  const sulfuras = ItemFactory.create(ItemType.sulfuras);

  assertEquals(extractProperties([regularItem]), [{ sellIn: 10, quality: 20, name: '+5 Dexterity Vest' }]);
  assertEquals(extractProperties([sulfuras]), [{ quality: 80, name: 'Sulfuras, Hand of Ragnaros' }]);
});

Deno.test('Gilded Rose update is working as expected', () => {
  const items = [
    ItemFactory.create(ItemType.regularItem, { name: '+5 Dexterity Vest', sellIn: 10, quality: 20 }),
    ItemFactory.create(ItemType.agedBrie, { sellIn: 2, quality: 0 }),
    ItemFactory.create(ItemType.regularItem, { name: 'Elixir of the Mongoose', sellIn: 5, quality: 7 }),
    ItemFactory.create(ItemType.sulfuras),
    ItemFactory.create(ItemType.backstagePasses, { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 15, quality: 20 }),
    ItemFactory.create(ItemType.backstagePasses, { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 10, quality: 49 }),
    ItemFactory.create(ItemType.backstagePasses, { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 49 }),
    ItemFactory.create(ItemType.conjuredItem, { name: 'Conjured Mana Cake', sellIn: 3, quality: 6 }),
  ];

  const gildedRose = new GildedRose(items);
  gildedRose.update();

  const gildedRoseItemsProperties = extractProperties(gildedRose.items);

  assertEquals(gildedRoseItemsProperties, [
    { sellIn: 9, quality: 19, name: '+5 Dexterity Vest' },
    { sellIn: 1, quality: 1, name: 'Aged Brie' },
    { sellIn: 4, quality: 6, name: 'Elixir of the Mongoose' },
    { quality: 80, name: 'Sulfuras, Hand of Ragnaros' },
    { sellIn: 14, quality: 22, name: 'Backstage passes to a TAFKAL80ETC concert' },
    { sellIn: 9, quality: 50, name: 'Backstage passes to a TAFKAL80ETC concert' },
    { sellIn: 4, quality: 50, name: 'Backstage passes to a TAFKAL80ETC concert' },
    { sellIn: 2, quality: 4, name: 'Conjured Mana Cake' },
  ]);
});
