import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import { IntlProvider } from "react-intl";
import Login from "./pages/Login/Login";
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <IntlProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}/>

        </Routes>
      </IntlProvider>
    </Router>
  );
}

export default App;
