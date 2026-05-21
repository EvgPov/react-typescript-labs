import type { Todo, Action } from '@/shared/types/types';

export function TodoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case 'toggle':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
      );

    case 'remove':
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}
