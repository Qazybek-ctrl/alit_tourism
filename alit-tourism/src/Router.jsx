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
import QuestionnaireForm from "./components/pages/forms/QuestionnaireForm";
import GuestForm from "./components/pages/forms/GuestForm";
import PaymentForm from "./components/pages/forms/PaymentForm";
import AdminPage from "./components/admin/AdminPage";
import TravelTips from "./components/pages/TravelTips";
import WhatsAppButton from "./components/WhatsAppButton";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
}

function Layout() {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden font-gotham">
            {!isAdminRoute && <Header />}

            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/visa" element={<VisaServices />} />
                    <Route path="/visa/tourism" element={<Tourism />} />
                    <Route path="/visa/work" element={<Work />} />
                    <Route path="/visa/business" element={<Business />} />
                    <Route path="/visa/immigrant" element={<Immigrant />} />
                    <Route path="/tours/:id" element={<TourPage />} />
                    <Route path="/kazakhstan" element={<KazakhstanTour />} />
                    <Route path="/form/questionnaire" element={<QuestionnaireForm />} />
                    <Route path="/form/guest" element={<GuestForm />} />
                    <Route path="/form/payment" element={<PaymentForm />} />
                    <Route path="/travel/tips" element={<TravelTips />} />
                </Routes>
            </main>

            {!isAdminRoute && <Footer />}
            <WhatsAppButton />
        </div>
    );
}

export default function AppRouter() {
    return (
        <Router>
            <ScrollToTop />
            <Layout />
        </Router>
    );
}
