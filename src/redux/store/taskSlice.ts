import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodosApi, addTodoApi, deleteTodoApi } from "./dataStore";

type Todo = {
  id: string;
  heading: string;
  completed: boolean;
};


export const fetchTodos = createAsyncThunk<Todo[]>(
  "tasks/fetchTodos",
  async () => {
    const todos = await fetchTodosApi();
    return todos;
  }
);

export const addTodo = createAsyncThunk<Todo, string>(
  "tasks/addTodo",
  async (heading: string) => {
    const newTodo = await addTodoApi(heading);
    return newTodo;
  }
);

export const deleteTodo = createAsyncThunk<string, string>(
  "tasks/deleteTodo",
  async (id: string) => {
    const deletedId = await deleteTodoApi(id);
    return deletedId;
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [] as Todo[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.items = [];
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
