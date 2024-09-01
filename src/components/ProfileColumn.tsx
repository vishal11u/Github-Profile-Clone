import React from "react";
import ProfileHeader from "./ProfileHeader";
import AchievementsList from "./AchievementsList";

interface ProfileColumnProps {
  username: string;
  followers: number;
  following: number;
  achievements: Array<{ name: string; icon: string }>;
}

const ProfileColumn: React.FC<ProfileColumnProps> = ({
  username,
  followers,
  following,
  achievements,
}) => {
  return (
    <div className="w-full md:w-1/3 ">
      <ProfileHeader
        username={username}
        followers={followers}
        following={following}
      />
      <AchievementsList achievements={achievements} />
    </div>
  );
};

export default ProfileColumn;
