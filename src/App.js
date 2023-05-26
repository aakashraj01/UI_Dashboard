import DashBoard from "./page/DashBoard/DashBoard";
import SignIn from "./page/SignIn/SignIn";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Register from "./components/register/Register";

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/dashboard"
          element={user ? <DashBoard /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
