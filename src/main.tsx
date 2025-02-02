import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// import browser router dari react doom
import { BrowserRouter } from "react-router-dom";

// import auth provide
import { AuthProvider } from "./context/AuthContext.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
