import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get("name")}"/>
        <button class="set-name">Update Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
      `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-name": this.onSetNameClick,
      "click:.set-age": this.onSetAgeClick,
      "click:.save-model": this.onSaveClick
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    let name;

    if (input) {
      name = input.value;
    }

    this.model.set({ name });
  };

  onSetAgeClick = (): void => {
    // before changing this function to arrow function, "this" points to the button
    this.model.setRandomAge();
  };

  onSaveClick = (): void => {
    this.model.save();
  };
}
