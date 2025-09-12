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


export const getTasksInitialState = (): TaskState => {
    return {
        todos: [],
        length: 0,
        completed: 0,
        pending: 0
    }
}

export const tasksReducer = (
  state: TaskState, 
  action: TaskSAction
):TaskState => {

  switch(action.type){
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }
    
    return {
      ...state,
      todos: [...state.todos, newTodo],
      length: state.length + 1,
      pending: state.pending + 1
    }

  case 'TOGGLE_TODO':
    const updateTodos = state.todos.map( todo => {
        if(todo.id === action.payload){
            return {...todo, completed: !todo.completed}
        }
      return todo;
    });

    return {
        ...state,
        todos: updateTodos,
        completed: updateTodos.filter(todo => todo.completed).length,
        pending: updateTodos.filter(todo => !todo.completed).length
    }

    case 'DELETE_TODO':
      const currentTodos = state.todos.filter(todo => todo.id !== action.payload);
      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        pending: currentTodos.filter(todo => !todo.completed).length,
        completed: currentTodos.filter(todo => todo.completed).length
      }

    default:
     return state;
  }
}

