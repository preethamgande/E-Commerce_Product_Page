import "./Profile.css";

export const Profile = () => {
  const user = {
    profileName: "John",
    title: "FrontEnd Developer",
    location: "India",
    bio: "Interested in building web applications using modern technologies.",
    email: "John@gmail.com",
    avatar:
      "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d",
    social: {
      github: "https://github.com/",
      linkedIn: "https://linkedin.com/",
    },
  };

  return (
    <div className="profile">
      <div className="profile-card">
        <div className="profile-bg"></div>

        <img
          className="avatar"
          src={user.avatar}
          alt={`${user.profileName} avatar`}
        />

        <div className="card-content">
          <h2>{user.profileName}</h2>
          <p className="title">{user.title}</p>
          <p className="location">{user.location}</p>
          <p className="bio">{user.bio}</p>
          <p className="email">
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>

          <div className="social-links">
            <a href={user.social.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={user.social.linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
