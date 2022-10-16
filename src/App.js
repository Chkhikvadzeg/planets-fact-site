import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import data from './data.json'
import Planet from "./components/Planet";

function App() {
  const colors = ['#DEF4FC', '#F7CC7F', '#545BFE', '#FF6A45', '#ECAD7A', '#FCCB6B', '#65F0D5', '#497EFA'];
  return (
    <Routes>
      <Route path="/" element={<Home colors={colors} planets={data} />} />
      <Route path=":planet" element={<Planet colors={colors} planets={data} />} />
    </Routes>
  );
}

export default App;
