import { Link, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

import ProtectedRoute from "./components/ProtectedRoute";
import AuthContext from "./context/AuthContext";

function App() {
  const context = useContext(AuthContext);

  if (!context) {
    return null;
  }

  const { isAuthenticated, logout } = context;

  return (
    <div>
      <nav>
        <Link to="/blog">Blog</Link>

        {isAuthenticated ? (
          <>
            <Link to="/admin">Admin</Link>

            <button onClick={logout}>
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>

      <Routes>
        <Route path="/blog" element={<BlogPage />} />

        <Route
          path="/blog/:slug"
          element={<BlogPostPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;