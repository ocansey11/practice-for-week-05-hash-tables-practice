const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4){
    // Your code here
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity)
    this.data.fill(null, 0);
  }


  hash(key) {
    // Your code here
    let str = sha256(key)
    str = str.slice(0,8)
    return parseInt(str, 16)
  }

  hashMod(key) {
    // Your code here
    let hash = this.hash(key)
   return (hash % this.capacity)
  }

  insertNoCollisions(key, value) {
    // Your code here
    // let index = this.hashMod(key)
    // this.data[index] = new KeyValuePair(key,value)
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    // let index = this.hashMod(key)
    // let newNode =  new KeyValuePair(key,value)
    // this.data[index].next = newNode
  }

  insert(key, value) {
    // Your code here
    // let index = this.hashMod(key)

    // if(this.data[index] == undefined){
    //   this.insertNoCollisions(key,value)
    // }
    // else{
    //   this.insertWithHashCollisions(key,value)
    // }
  }
}


module.exports = {HashTable};
