import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({ name: "jake", age: 6 });

const root = document.getElementById("root");

if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error("User Element Not Found.");
}
