const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  
  it("Sulfuras", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros")]);
    const items = gildedRose.sulfurasCheck();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    //expect(items[0].sellBy).toBe(1);
    //expect(items[0].quality).toBe(1);
  });
  
  it("Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.agedBrieCheck();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellBy).toBe(1);
    expect(items[0].quality).toBe(1);
  });

  it("Backstage passes to a TAFKAL80ETC concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const items = gildedRose.backstagePassCheck();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    //expect(items[0].sellBy).toBe(1);
    expect(items[0].quality).toBe(21);
  });
  it("Backstage passes to a TAFKAL80ETC concert +2 quality increase", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 20)]);
    const items = gildedRose.backstagePassCheck();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    //expect(items[0].sellBy).toBe(1);
    expect(items[0].quality).toBe(22);
  });
  it("Backstage passes to a TAFKAL80ETC concert +3 quality increase", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 3, 20)]);
    const items = gildedRose.backstagePassCheck();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    //expect(items[0].sellBy).toBe(1);
    expect(items[0].quality).toBe(23);
  });
  it("Backstage passes to a TAFKAL80ETC concert after concert quality of 0", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20)]);
    const items = gildedRose.backstagePassCheck();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    //expect(items[0].sellBy).toBe(1);
    expect(items[0].quality).toBe(0);
  });

});
