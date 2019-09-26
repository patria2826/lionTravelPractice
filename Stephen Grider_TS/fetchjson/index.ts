import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";

interface TodoFormat {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data;
  todo.map((ele: TodoFormat) => {
    const id = ele.id;
    const title = ele.title;
    const completed = ele.completed;
    logTodo(id, title, completed);
  });
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `The Todo with ID:${id} has a title of: ${title}
        ${completed ? "Done." : "Not done yet."}
          `
  );
};
