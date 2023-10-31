interface counterState {
  value: number;
  name: string;
}

const initialState: counterState = {
  value: 0,
  name: "test",
};

export default (state = initialState, action: any = {}) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + 1,
        name: action.payload["name"],
      };

    default:
      return state;
  }
};
