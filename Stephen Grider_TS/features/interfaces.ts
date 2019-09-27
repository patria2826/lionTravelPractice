export {};

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  name: "coke",
  carbonatd: true,
  sugar: 40,
  summary(): string {
    return `${this.name} is${this.carbonatd ? "" : " not"} a drink containing ${
      this.sugar
    } grams of sugar.`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
