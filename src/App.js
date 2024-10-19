import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./features/ScrollToTop";
import PageLoading from "./features/PageLoading";
import SearchResultPage from "./pages/SearchResultPage";

// Lazy-loaded components
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const LogIn = React.lazy(() => import("./pages/LogIn"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<LogIn />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/search/:query" element={<SearchResultPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
