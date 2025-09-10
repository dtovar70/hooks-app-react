interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState{
    todos: Todo[];
    length: number;
    completed: number;
    pending: number
}

export type TaskSAction = 
| { type: 'ADD_TODO', payload: string }
| { type: 'TOGGLE_TODO', payload: number }
| { type: 'DELETE_TODO', payload: number }

const tasksReducer = (state, action):TaskState => {
  return state;
}

export default tasksReducer