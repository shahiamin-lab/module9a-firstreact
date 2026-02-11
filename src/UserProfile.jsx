function UserProfile() {
    const name = "Sarah Johnson";
    const bio = "Full-stack developer passionate about creating user-friendly applications.";
    const profileImage = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face";

    return (
        <div>
            <img src={profileImage} alt="profile" width="120" />
            <h1>{name}</h1>
            <p>{bio}</p>
        </div>
    );
}

export default UserProfile;
