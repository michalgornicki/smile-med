import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./subpages/Team";
import Home from "./subpages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Team />} />
        <Route path="/team" element={<Team />}></Route>
        <Route path="/home" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));