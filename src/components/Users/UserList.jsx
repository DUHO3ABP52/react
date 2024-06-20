import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../store/slices/userSlice";
import "./UserList.css";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [displayedUsers, setDisplayedUsers] = useState(8);
  const [likedUsers, setLikedUsers] = useState(() => {
    const savedLikedUsers = localStorage.getItem('likedUsers');
    return savedLikedUsers ? JSON.parse(savedLikedUsers) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const showMoreUsers = () => {
    setDisplayedUsers(displayedUsers + 8);
  };

  const toggleLike = (e, userId) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setLikedUsers((prevLikedUsers) => {
      const newLikedUsers = prevLikedUsers.includes(userId)
        ? prevLikedUsers.filter((id) => id !== userId)
        : [...prevLikedUsers, userId];
      localStorage.setItem('likedUsers', JSON.stringify(newLikedUsers));
      return newLikedUsers;
    });
  };

  const handleClick = (user) => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="main-content-container">
      <div className="central-content-container">
        <div className="team-member-grid">
          {users.slice(0, displayedUsers).map((user) => (
            <div className="flex-column-container" key={user.id}>
              <div className="profile-card1" onClick = {() => handleClick(user)}>
                <div className="profile-card">
                  <img
                    src={user.avatar}
                    className="profile-image-container-list"
                    alt={user.first_name}
                  />
                  <p className="artist-name-text-style">
                    {user.first_name} {user.last_name}
                  </p>
                  <div className="profile-card3">
                    <div className={`svg-container ${likedUsers.includes(user.id) ? 'active' : ''}`} onClick={(e) => toggleLike(e, user.id)}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="center-box">
          <div className="button-container" onClick={showMoreUsers}>
            <p className="show-more-button-text-style">Показать еще</p>
            <div className="svg-container1">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;