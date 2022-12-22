import "./App.css";
import { Route, Routes } from "react-router-dom";
import Board from "./Page/Board";
import BoardPage from "./Page/BoardPage";
import BoardWriteFrom from "./Page/BoardWirteFrom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/board/:id" element={<BoardPage />}></Route>
        <Route path="/board/modifyform" element={<BoardWriteFrom />}></Route>
      </Routes>
    </div>
  );
}

export default App;
