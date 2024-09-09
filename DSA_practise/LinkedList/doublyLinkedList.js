class linkedNode {
    constructor(head = null) {
        this.head = head;
        this.tail = null;  // Add a tail pointer
    }

    print() {
        // This can remain the same
    }

    atBeginning(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;  // Set prev of old head
            this.head = newNode;
        }
    }

    atEnd(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;  // Set prev of new node
            this.tail = newNode;
        }
    }

    sortNode() {
        if (this.head === null || this.head.next === null) {
            return;
        }
        let swapped;
        do {
            swapped = false;
            let temp = this.head;
            while (temp.next !== null) {
                if (temp.data > temp.next.data) {
                    // Swap data
                    let sort = temp.data;
                    temp.data = temp.next.data;
                    temp.next.data = sort;
                    swapped = true;
                }
                temp = temp.next;
            }
        } while (swapped);
    }

    mergeLists(l1, l2) {
        let newNode = new Node(0);
        let temp = newNode;
        while (l1 !== null && l2 !== null) {
            if (l1.data < l2.data) {
                temp.next = l1;
                l1.prev = temp;  // Set prev pointer
                l1 = l1.next;
            } else {
                temp.next = l2;
                l2.prev = temp;  // Set prev pointer
                l2 = l2.next;
            }
            temp = temp.next;
        }
        if (l1 !== null) {
            temp.next = l1;
            l1.prev = temp;  // Set prev pointer
        } else {
            temp.next = l2;
            l2.prev = temp;  // Set prev pointer
        }
        this.head = newNode.next;
        this.head.prev = null;  // Set prev of head to null
        // Set the tail
        this.tail = this.head;
        while (this.tail.next !== null) {
            this.tail = this.tail.next;
        }
    }

    // Add a method to print in reverse (optional)
    printReverse() {
        let temp = this.tail;
        while (temp) {
            console.log(temp.data);
            temp = temp.prev;
        }
    }
}