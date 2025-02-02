import AppRoutes from "./routes";
// import Navbar from "./components/Navbar/Navbar";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container-fluid mt-5">
        <AppRoutes />
      </div>
    </div>
  );
}
