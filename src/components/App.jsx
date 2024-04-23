import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "pages/HomePage";
import TasksPage from "pages/TasksPage";
import NotFoundPage from "pages/NotFoundPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tasks" element={<TasksPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
