import React from "react";
import { GoPeople } from "react-icons/go";

interface ProfileHeaderProps {
  username: string;
  followers: number;
  following: number;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  followers,
  following,
}) => {
  return (
    <div className="flex items-center flex-col pb-8 border-b border-gray-600 ">
      <div className="w-h-80 h-80 bg-gray-700 rounded-full mr-4 overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s"
          alt="profile-image"
          className="h-full w-full"
        />
      </div>
      <div className="w-full">
        <h1 className="text-xl py-2 font-bold text-left">{username}</h1>
        <button className="mt-2 flex px-36 border border-gray-500 py-1 bg-gray-800 rounded-md">
          Follow
        </button>
        <div className="mt-3 text-sm flex items-center gap-x-1 text-gray-400">
          <span className="flex items-center gap-x-1">
            <GoPeople color="white" />
            {followers} followers
          </span>{" "}
          · <span>{following} following</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
