import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './App.css';
import Header from "./component/Header";
import CalendarPage from "./component/CalendarPage";
import ScheduleList from "./component/ScheduleList";
import Schedule from "./component/Schedule";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<CalendarPage />} />
          <Route path='/scheduleList' element={<ScheduleList />} />
          <Route path='/Schedule/:date' element={<Schedule />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
