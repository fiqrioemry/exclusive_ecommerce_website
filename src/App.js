import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CheckoutPage from "./pages/CheckoutPage";
import ScrollToTop from "./features/ScrollToTop";
import { NonUserAuth, UserAuth } from "./middleware/Authenticate";
import PageLoading from "./features/loading/PageLoading";
import ProductCategories from "./pages/ProductCategories";
import UserProfilePage from "./pages/UserProfilePage";

// Lazy-loaded pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const BlankPage = React.lazy(() => import("./pages/BlankPage"));
const SigninPage = React.lazy(() => import("./pages/SigninPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const ProductDetailPage = React.lazy(() => import("./pages/ProductDetailPage"));
const ProductSearchPage = React.lazy(() => import("./pages/ProductSearchPage"));

function MainContent() {
  const location = useLocation();
  const excludedPaths = ["/checkout", "/payment"];
  const showHeaderFooter = !excludedPaths.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
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
            path="/userprofile"
            element={
              <UserAuth>
                <UserProfilePage />
              </UserAuth>
            }
          />
          <Route
            path="/checkout"
            element={
              <UserAuth>
                <CheckoutPage />
              </UserAuth>
            }
          />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route
            path="/product/search/:params"
            element={<ProductSearchPage />}
          />
          <Route
            path="/product/categories/:categories"
            element={<ProductCategories />}
          />
          <Route path="*" element={<BlankPage />} />
        </Routes>
      </Suspense>
      {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <main className="mt-[70px] overflow-hidden">
      <Router>
        <ScrollToTop />
        <ToastContainer
          position="top-center"
          autoClose={600}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="light"
        />
        <MainContent />
      </Router>
    </main>
  );
}

export default App;
