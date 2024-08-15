import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="p-5 mb-5 bg-light rounded-3 shadow-sm display-5">
          <div className="container-fluid py-5">
            <h1 className="fw-bold">Hello, world!</h1>
            <p className="col-md-12 fs-5">Belajar Fullstack developer js</p>
            <hr />
            <Link to={"/register"} className="btn btn-primary btn-lg me-3">
              Register
            </Link>
            <Link to={"/login"} className="btn btn-outline-secondary btn-lg">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
