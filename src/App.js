import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import data from './data.json'
import Planet from "./components/Planet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home planets={data} />} />
      <Route path=":planet" element={<Planet planets={data} />} />
    </Routes>
  );
}

export default App;
