import React, { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PageLoading from "./features/loading/PageLoading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./features/ScrollToTop";
import { NonUserAuth, UserAuth } from "./middleware/Authenticate";
import CheckoutPage from "./pages/CheckoutPage";

// loading page animation
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const BlankPage = React.lazy(() => import("./pages/BlankPage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage"));
const SigninPage = React.lazy(() => import("./pages/SigninPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const ProductDetailPage = React.lazy(() => import("./pages/ProductDetailPage"));
const ProductSearchPage = React.lazy(() => import("./pages/ProductSearchPage"));

function App() {
  return (
    <main className="mt-[70px]">
      <Router>
        <ScrollToTop />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Header />
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/signin"
              element={
                <NonUserAuth>
                  <SigninPage />
                </NonUserAuth>
              }
            />

            <Route
              path="/checkout"
              element={
                <NonUserAuth>
                  <CheckoutPage />
                </NonUserAuth>
              }
            />

            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route
              path="/product/search/:params"
              element={<ProductSearchPage />}
            />
            <Route path="*" element={<BlankPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
