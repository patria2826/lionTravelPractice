import { User } from "./models/User";

const user = new User({ name: "Ammy", age: 22 });
console.log(user.on);

console.log(user.get("name"));
user.on("change", () => {
  console.log("YOooooo");
});
user.trigger("change");
