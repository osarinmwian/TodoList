export interface State {
    data: {
      list: Task[]; 
      total: number;
    };
    loading: "loading" | "pending" | "succeeded" | "failed";
  }
  export interface Task {
   list: undefined;
  }
  
 export  interface AddTaskAction {
    type: string;
    payload: Task;
  }

  export interface Todo  {
    id: string;
    heading: string;
  };
 export  interface Props {
    onPress: () => void;
  }
  