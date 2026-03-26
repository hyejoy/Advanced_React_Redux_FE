import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 1. 애플리케이션에게 관리할 글로벌 스토어가 존재함을 알림 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
