export type TodoType = {
  val: string;
  checked: boolean;
  id: number;
};

interface initialTodoState {
  todos: TodoType[];
}

const initialState: initialTodoState = {
  toodos: [],
};
export const todoSlice = createSlice({
  // 1. 슬라이스의 이름 (보관상자 이름)
  name: "todo",
  // 2. 초기상태
  initalState: initialState,
  // 3. reducer 함수 (슬라이스를 조작하는 함수 - 중앙 상태 조작 함수)
  reducers: {
    addTodo: () => {},
    removeTodo: () => {},
    toggleCompletion: () => {},
  },
});

// reducer 추출 => main store에 연결하기위해 => import todoReducer from './slices/todoSlice';
export default todoSlice.reducer;

export const { addTodo, removeTodo, toggleCompletion } = todoSlice.actions;
