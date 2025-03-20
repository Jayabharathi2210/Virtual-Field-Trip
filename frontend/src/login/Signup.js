import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Auth.css";
import { FaEnvelope, FaLock, FaUser, FaPhone } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account Created Successfully!");
    navigate("/login");
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 auth-container">
        
        {/* Left Section - Signup Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center form-section">
          <div className="p-5 shadow rounded form-container">
            <h2 className="fw-bold text-center mb-4">Create an Account</h2>
            
            <form onSubmit={handleSignup}>
              <div className="mb-3 input-group">
                <span className="input-group-text bg-light"><FaUser /></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-light"><FaEnvelope /></span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-light"><FaPhone /></span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-light"><FaLock /></span>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="form-control"
                  placeholder="Password (Min 6 chars)"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  minLength="6"
                  required
                />
                <button type="button" className="btn btn-light" onClick={() => setPasswordVisible(!isPasswordVisible)}>
                  {isPasswordVisible ? "🙈" : "👁️"}
                </button>
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-light"><FaLock /></span>
                <input
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  className="form-control"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
                <button type="button" className="btn btn-light" onClick={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                  {isConfirmPasswordVisible ? "🙈" : "👁️"}
                </button>
              </div>

              <button type="submit" className="btn btn-success w-100 mt-2">Create Account</button>
            </form>

            <p className="mt-4 text-center">
              Already have an account? <Link to="/login" className="text-primary">Login</Link>
            </p>
          </div>
        </div>

        {/* Right Section - Background Image */}
        <div className="col-md-6 auth-right d-flex align-items-center justify-content-center position-relative text-white">
          <div className="overlay"></div>
          <div className="text-center position-relative">
            <h3 className="fw-bold">Explore the World</h3>
            <p>Travel is the only thing you buy that makes you richer.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;
