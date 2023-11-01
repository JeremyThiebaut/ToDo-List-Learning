import actionTypes from "@/store/action";

export interface StateProps {
  todo: {
    id: string;
    description: string;
  }[];
}

interface ActionProps {
  type: string;
  payload: {
    newTodo: StateProps["todo"][0];
    id: string;
    updateTodo: StateProps["todo"][0];
  };
}

const initialState: StateProps = {
  todo: [],
};

export default (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, action.payload.newTodo],
      };
    }

    case actionTypes.REMOVE_TODO: {
      return {
        ...state,
        todo: [...state.todo.filter((todo) => todo.id !== action.payload.id)],
      };
    }

    case actionTypes.UPDATE_TODO: {
      return {
        ...state,
        todo: [
          ...state.todo.map((todo) =>
            todo.id === action.payload.updateTodo.id
              ? { ...todo, description: action.payload.updateTodo.description }
              : todo
          ),
        ],
      };
    }

    default:
      return state;
  }
};
