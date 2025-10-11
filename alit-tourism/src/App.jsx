import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import KazakhstanTour from "./components/pages/KazakhstanTour";
import VisaServices from "./components/pages/VisaServices";
import Tourism from "./components/pages/visa/Tourism";
import Work from "./components/pages/visa/Work";
import Business from "./components/pages/visa/Business";
import Immigrant from "./components/pages/visa/Immigrant";
import TourPage from "./components/pages/tour/TourPage";
import AuthPage from "./components/Auth";
import ProfilePage from "./components/profile/ProfilePage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/visa" element={<VisaServices />} />
            <Route path="/visa/tourism" element={<Tourism />} />
            <Route path="/visa/work" element={<Work />} />
            <Route path="/visa/business" element={<Business />} />
            <Route path="/visa/immigrant" element={<Immigrant />} />
            <Route path="/tours/:id" element={<TourPage />} />
            <Route path="/kazakhstan" element={<KazakhstanTour />} />
            <Route path="/blog" element={<div className="text-center py-20 text-3xl">Travel Tips Blog Page</div>} />
            <Route path="/insurance" element={<div className="text-center py-20 text-3xl">Insurance Page</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}