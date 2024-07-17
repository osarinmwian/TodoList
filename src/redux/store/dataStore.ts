
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
        todos = [...todos, newTodo]; 
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
  export const updateTodoApi = async (id: string, completed: boolean, heading?: string): Promise<Todo> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
          const updatedTodo = { ...todos[index], completed, ...(heading && { heading }) };
          todos[index] = updatedTodo;
          resolve(updatedTodo);
        } else {
          reject(new Error(`Todo with ID ${id} not found`));
        }
      }, 500);
    });
  };
  
  