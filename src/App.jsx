import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import About from "./screens/About/About.jsx";
import {HostLayout} from "./components/HostLayout.jsx";
import HostDashboard from "./screens/Host/SubRoutes/HostDashboard.jsx";
import {Income} from "./screens/Host/SubRoutes/Income.jsx";
import {HostVans} from "./screens/Host/SubRoutes/HostVans.jsx";
import {Reviews} from "./screens/Host/SubRoutes/Reviews.jsx";
import Vans from "./screens/Vans/Vans.jsx";
import Layout from "./components/Layout.jsx";
import VansDetails from "./screens/Vans/VansDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
