import TodoPage from "./pages/TodoPage";
import FormPage from "./pages/FormPage";
import FetchApiPage from "./pages/FetchApiPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/form-page" element={<FormPage />} />
          <Route path="/fetch-api/:name" element={<FetchApiPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
