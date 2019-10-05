import { UserEdit } from "./views/UserEdit";
import { User, UserProps } from "./models/User";
import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";

const user = User.buildUser({ name: "jake", age: 6 });
const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

const root = document.getElementById("root");

if (root) {
  new UserEdit(root, user).render();

  users.fetch();
  users.on("change", () => {
    new UserList(root, users).render();
  });
} else {
  throw new Error("User Element Not Found.");
}
