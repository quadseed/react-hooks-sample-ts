import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextPage from "./components/pages/ContextPage";
import EffectPage from "./components/pages/EffectPage";
import HomePage from "./components/pages/HomePage";
import RefPage from "./components/pages/RefPage";
import StatePage from "./components/pages/StatePage";
import ReducerPage from "./components/pages/ReducerPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/effect" element={<EffectPage />} />
        <Route path="/context" element={<ContextPage />} />
        <Route path="/ref" element={<RefPage />} />
        <Route path="/reducer" element={<ReducerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
