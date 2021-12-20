import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./subpages/Team";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<App />} />
        <Route path="/team" element={<Team />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));