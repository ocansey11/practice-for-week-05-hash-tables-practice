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
    let index = this.hashMod(key)
    let newNode  =  new KeyValuePair(key,value)

    if(this.data[index] === null){
      this.data[index] = newNode
      this.count++
    }
    else{
      throw new Error('hash collision or same key/value pair already exists!')
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    let index = this.hashMod(key)
    let newNode  =  new KeyValuePair(key,value)
    let oldNode = this.data[index]


    if(this.data[index] == null){
      this.insertNoCollisions(key,value)
    }
    else{
      while (oldNode.next) {
        oldNode = oldNode.next;
      }
      this.data[index] = newNode
      this.data[index].next =  oldNode
      this.count++
    }
  }

  insert(key, value) {
    // Your code here
    let index = this.hashMod(key)

    if(this.data[index] == null){
      this.insertNoCollisions(key,value)
    }
    else {
      let head = this.data[index]
      while (head) {
        if (head.key === key && head.value !== value) {
          return head.value = value;
        }
        head = head.next;
      }
      this.insertWithHashCollisions(key, value);
    }
  }
}


module.exports = {HashTable};
