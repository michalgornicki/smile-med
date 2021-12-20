import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./subpages/Team";
import App from "./App";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Team />} />
        <Route path="/team" element={<Team />}>
        <Route path="/team" element={<Team />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));