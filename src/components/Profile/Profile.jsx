import React from "react";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div className={css.profileInfo}>
        <img className={css.profileAvatar} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileStatItem}>
          <span className={css.profileStatLabel}>Followers</span>
          <span className={css.profileStatValue}>{stats.followers}</span>
        </li>
        <li className={css.profileStatItem}>
          <span className={css.profileStatLabel}>Views</span>
          <span className={css.profileStatValue}>{stats.views}</span>
        </li>
        <li className={css.profileStatItem}>
          <span className={css.profileStatLabel}>Likes</span>
          <span className={css.profileStatValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
