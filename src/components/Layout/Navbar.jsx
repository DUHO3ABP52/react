import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/slices/authSlice";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className={location.pathname === "/" ? "team-section" : "partner-card"}>
      {location.pathname === "/" ? (
        <div className="team-section1">
          <div className="team-description-container">
            <p className="team-title-text-style">Наша команда</p>
            <p className="team-description-text-style">
              Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
            </p>
          </div>
          <div className="team-section-footer">
            <button className="exit-button" onClick={handleLogout}>Выход</button>
          </div>
        </div>
      ) : (
        user && (
          <div className="partner-card1">
            <div className="partner-info-container1">
              <div className="partner-info-container2">
                <Link to="/" className="back-button-style"><p>Назад</p></Link>
              </div>
              <img src={user.avatar} className="profile-image-container" alt="Partner" />
              <div className="partner-info-container">
                <p className="large-white-text">{user.first_name} {user.last_name}</p>
                <p className="partner-text-style">Партнер</p>
              </div>
              <div className="sidebar-button-container">
                <button className="exit-button" onClick={handleLogout}>Выход</button>
              </div>
            </div>
          </div>
        )
      )}
    </nav>
  );
};

export default Navbar;