import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>








