import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import TuffuMartFooter from "./components/TuffuMartFooter";
import { useState } from "react";
import Industries from "./components/Industries";


const App: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <Router>
      <Navbar setShowContactForm={setShowContactForm} scrollY={0} />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<Home setShowContactForm={setShowContactForm} />}
          />
          <Route
            path="/contact"
            element={
              <Contact
                show={true} // Always show when navigating to /contact
                onClose={() => window.history.back()} // Go back when closed
              />
            }
          />
          <Route
            path="/admin"
            element={
              localStorage.getItem("token") ? (
                <Admin />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<AdminLogin />} />
        </Routes>
      </main>

      {/* Global Contact Modal */}
      <Contact
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
      <Industries/>
      <TuffuMartFooter />
    </Router>
  );
};

export default App;
