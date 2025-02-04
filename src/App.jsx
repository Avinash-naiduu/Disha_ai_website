import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';
import StickyButton from './components/StickyButton';



// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Genviq = lazy(() => import('./pages/Genviq'));
const Resources = lazy(() => import('./pages/Resources'));
const Events = lazy(() => import('./pages/Events'));
const Contactus = lazy(() => import('./pages/Contactus'));
const Aboutus = lazy(() => import('./pages/Aboutus'));
const Terms = lazy(() => import('./pages/Terms'));
const Refunds = lazy(() => import('./pages/Refunds'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Products = lazy(() => import('./pages/Products'));
const Blogdetails = lazy(() => import('./pages/Blogdetails'));


function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <main style={{ padding: '1rem' }}>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/genviq" element={<Genviq />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/Contactus" element={<Contactus />} />
                        <Route path="/aboutus" element={<Aboutus />} />
                        <Route path="/terms&conditions" element={<Terms />} />
                        <Route path="/refunds&cancellation" element={<Refunds />} />
                        <Route path="/privacy policy" element={<Privacy />} />
                        <Route path="/products&services" element={<Products />} />
                        <Route path="/Blogdetails" element={<Blogdetails />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
            <StickyButton/>
        </Router>
    );
}

export default App;
