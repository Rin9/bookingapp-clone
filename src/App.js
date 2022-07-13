import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import AirpotTaxis from "./routes/airpot-taxis/airpot-taxis-route.component";
import Attractions from "./routes/attractions/attractions-route.component";
import Auth from "./routes/auth/auth.component";
import CarRental from "./routes/carRental/carRental-route.component";
import FlightsHotel from "./routes/flights-hotel/flights-hotel-route.component";
import Flights from "./routes/flights/flights-route.component";
import Home from "./routes/home/home-route.component";
import NotFound from "./routes/notfound/notfound-route.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="flights" element={<Flights />} />
        <Route path="flightsHotel" element={<FlightsHotel />} />
        <Route path="cars" element={<CarRental />} />
        <Route path="attractions" element={<Attractions />} />
        <Route path="taxis" element={<AirpotTaxis />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
