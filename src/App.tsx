import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { TodayModule } from "./components/modules/TodayModule/TodayModule";
import { ByDateModule } from "./components/modules/ByDateModule/ByDateModule";
import { SinceModule } from "./components/modules/SinceModule/SinceModule";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="/today" element={<TodayModule />} />
        <Route path="/by-date" element={<ByDateModule />} />
        <Route path="/since" element={<SinceModule />} />
      </Route>
    </Routes>
  );
}

export default App;
