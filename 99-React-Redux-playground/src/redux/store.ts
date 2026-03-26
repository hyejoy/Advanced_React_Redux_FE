import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

const store = configureStore({
  // 2.감속기 추가
  // 3. slice 만들어주기 그러면 자동으로 액션과 리듀서 가져옴
  // 기본적으로 모든 작업은 redux스토어에서 특정 조각으로 관리할 예정
  reducer: {
    todo: todoReducer,
  },
});

export default store;
