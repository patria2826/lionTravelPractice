import { Sorter } from "./Sorter";
import { Sortable } from "./Sortable";

export class CharsCollection extends Sorter implements Sortable {
  constructor(public data: string) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number) {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const chars = this.data.split("");
    const leftHand = this.data[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = leftHand;

    this.data = chars.join(""); //array to str
  }
}
