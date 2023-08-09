class Item {
  constructor(name, sellBy, quality){
    this.name = name;
    this.sellBy = sellBy;
    this.quality = quality;
  }
}

class Shop{
  constructor(items=[]){
    this.items = items;
  }
  
  sulfurasCheck(){
    for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].quality = this.items[i].quality - 1;
    }
  }
    console.log('sulfuras', this.items)
    return this.items
  }

  agedBrieCheck(){
    for (let i = 0; i < this.items.length; i++) {
      if ((this.items[i].name === 'Aged Brie') && (this.items[i].quality <= 50)) {
        (this.items[i].sellBy = this.items[i].sellBy -1) && (this.items[i].quality = this.items[i].quality + 1);
      } else {
        this.items[i].sellBy = this.items[i].sellBy -1
      }
    }
    console.log('Aged Brie', this.items)
    return this.items
  }

  backstagePassCheck(){
    for (let i = 0; i < this.items.length; i++) {
      if ((this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') && (this.items[i].quality <= 50)) {
        this.items[i].sellBy > 11 ? this.items[i].quality = this.items[i].quality + 1 : console.log('sell by less than 11');
        (this.items[i].sellBy > 5) && (this.items[i].sellBy < 11) ? this.items[i].quality = this.items[i].quality + 2 : console.log('sell by greater than 11');
        (this.items[i].sellBy >= 0) && (this.items[i].sellBy < 6) ? this.items[i].quality = this.items[i].quality + 3 : console.log('quality 3');
        (this.items[i].sellBy < 0)  ? this.items[i].quality = 0 : console.log('quality 0')
    } else {
      this.items[i].sellBy < 6
        qualityLessFifty(this.items[i])
      }
    }
    return this.items
  }
    
  qualityLessFifty() {
    // if (this.items[i].quality < 50) {
    //   this.items[i].quality = this.items[i].quality + 1;
    // }
    this.items[i].quality < 50 ? this.items[i].quality = this.items[i].quality + 1 : console.log('greater than 50')
  }
}

module.exports = {
  Item,
  Shop
}