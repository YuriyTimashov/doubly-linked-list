const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = this._tail = null;
    }

    append(data) {
     var node = new Node(data);
        
     if (this._head == null) {
         this._head = this._tail = node;
     } else {
         this._tail.next = node;
         node.prev = this._tail;
         this._tail = node;
     }
        
     this.length++;
     return this;
     }

    head() {
      return (this._head == null) ? null : this._head.data;
    }

    tail() {
      return (this._tail == null) ? null : this._tail.data;
    }

    at(index) {
      if (index > -1 && index < this.length) {
         var currentNode = this._head;
         var j = 0;
         while(j < index) {
          currentNode = currentNode.next;
          j++;
         }
         return currentNode.data;
      }
      throw new Error('Node with this index doesn\'t belong to this list');
    }

    insertAt(index, data) {
      var node = new Node(data);

      if (index == 0) {
        node.next = this._head;
        node.prev = null;
        this._head = node;
      } else {
        var currentNode = this._head;
        var j = 1;
        while (j < index) {
         currentNode = currentNode.next;
         j++;
        }
        //we need to insert a new node right after currenNode
        currentNode.next.prev = node;
        node.next = currentNode.next;
        currentNode.next = node;
        node.prev = currentNode;
      }
        
      this.length += 1;
      return this;
    }

    isEmpty() {
      return (this._head == null) ? true : false;
    }

    clear() {
      this._head = this._tail = null;
      this.length = 0;
      return this;
    }

    deleteAt(index) {
      if (index < 0 || index > this.length) {throw new Error('Node with this index doesn\'t belong to this list')}
        
      if(index == 0) {
        this._head = this._head.next;
      } else {
        var currentNode = this._head;
        var j = 1;
        while(j < index) {
         currentNode = currentNode.next;
         j++;
        }
        currentNode.next = currentNode.next.next;
      }

      this.length -= 1;
      return this;
    }

    reverse() {
      var currentNode = this._head;
        
      while (currentNode) {
         var temp = currentNode.next;
         currentNode.next = currentNode.prev;
         currentNode = temp;
      }

      var tmp = this._tail;
      this._tail = this._head;
      this._head = tmp;
        
      return this;
    }

    indexOf(data) {
      var currentNode = this._head;
      var index = 0;
        
      while(currentNode) {
        if (currentNode.data == data) {
          return index;;
        }
        currentNode = currentNode.next;
        index += 1;
      }
      return -1;
    }
}

module.exports = LinkedList;
