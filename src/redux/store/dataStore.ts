
type Todo = {
    id: string;
    heading: string;
    completed: boolean;
  };
  
  let todos: Todo[] = [];
  
  export const fetchTodosApi = async (): Promise<Todo[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(todos);
      }, 500);
    });
  };
  
  export const addTodoApi = async (heading: string): Promise<Todo> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTodo: Todo = { id: String(Date.now()), heading, completed: false };
        todos.push(newTodo);
        resolve(newTodo);
      }, 500);
    });
  };
  
  export const deleteTodoApi = async (id: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        todos = todos.filter((todo) => todo.id !== id);
        resolve(id);
      }, 500);
    });
  };

  export const updateTodoApi = async (id: string, completed: boolean): Promise<Todo> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedTodo: Todo = { id, heading: "Updated Heading", completed };
        resolve(updatedTodo);
      }, 500);
    });
  };
  