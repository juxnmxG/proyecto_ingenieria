import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import SpringRetrospective from "./Views/SpringRetrospective";
import ViewDayliScrum from "./Views/ViewDayliScrum";
import ViewHome from "./Views/ViewHome";
import ViewProductBacklog from "./Views/ViewProductBacklog";
import ViewProductIncrement from "./Views/ViewProductIncrement";
import ViewSpringPlannig from "./Views/ViewSpringPlannig";
import ViewSpringReview from "./Views/ViewSpringReview";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<ViewHome />} />
          <Route index path="/retrospective" element={<SpringRetrospective />} />
          <Route index path="/dayli" element={<ViewDayliScrum />} />
          <Route index path="/backlog" element={<ViewProductBacklog />} />
          <Route index path="/increment" element={<ViewProductIncrement />} />
          <Route index path="/planning" element={<ViewSpringPlannig />} />
          <Route index path="/review" element={<ViewSpringReview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
