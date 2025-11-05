import { Todo } from "../models/todo.model";

export let todo: Todo[] = [
  { id: 1, name: "pakornsit", lastname: "kositkool", age: 20 },
];

export function saveTodo(data: Omit<Todo, "id">): Todo {
  const { name = "", lastname = "", age = 0 } = data;

  const newTodo: Todo = {
    id: todo.length ? Math.max(...todo.map((t) => t.id)) + 1 : 1,
    name,
    lastname,
    age,
  };

  todo.push(newTodo);
  return newTodo;
}

export function findId(id: number): Todo | null {
  return todo.find((item) => item.id === id) || null;
}

export function deleteTodo(id: number): boolean {
  const findIndex = todo.findIndex((item) => item.id === id);
  if (findIndex === -1) {
    return false;
  }
  todo.splice(findIndex, 1);
  return true;
}

export function updateTodo(id: number, data: Partial<Todo>): Todo | null {
  const findIndex = todo.findIndex((item) => item.id === id);

  if (findIndex === -1) {
    return null;
  }

  todo[findIndex] = { ...todo[findIndex], ...data };
  return todo[findIndex];
}
