import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function Login() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center">Login</h2>
        <form className="mt-3">
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Enter Email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Enter Password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup" className="text-primary">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
