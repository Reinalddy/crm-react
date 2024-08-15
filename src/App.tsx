import AppRoutes from "./routes";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5">
        <AppRoutes />
      </div>
    </div>
  );
}
