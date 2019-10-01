import { NumbersCollection } from "./NumbersCollection";
import { CharsCollection } from "./CharsCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([1, -39, 0, 4, 6, 5, -1, 9, 0]);
const charsCollection = new CharsCollection("asvdDDCna");
const linkedList = new LinkedList();

// let sorter = new Sorter(numberCollection);
numberCollection.sort();
console.log(numberCollection.data);

charsCollection.sort();
console.log(charsCollection.data);

linkedList.add(3);
linkedList.add(31);
linkedList.add(26);
linkedList.add(-9);
linkedList.add(0);
linkedList.add(-12);
linkedList.sort();
linkedList.print();
