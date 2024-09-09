class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
    printData(){
        let temp=this;
        while(temp !==null){
            console.log(temp.data)
            temp=temp.next
        }
    }
}
let n=new Node(1)
n.next=new Node(2)
n.next.next=new Node(3)
n.next.next.next=new Node(4)
n.printData()

