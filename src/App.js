import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import data from './data.json'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home planets={data} />} />
    </Routes>
  );
}

export default App;
