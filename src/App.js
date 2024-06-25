import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AddResource } from "./Pages/AddResource";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-resource" element={<AddResource />} />
      </Routes>
    </Router>
  );
}

export default App;