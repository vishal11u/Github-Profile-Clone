import React from "react";

interface Achievement {
  name: string;
  icon: string;
}

interface AchievementsListProps {
  achievements: Achievement[];
}

const AchievementsList: React.FC<AchievementsListProps> = ({
  achievements,
}) => {
  return (
    <div className="mt-4">
      <h2 className="text-[15px] font-semibold mb-2">Achievements</h2>
      <div className="">
        {achievements.map((achievement, index) => (
          <img
            key={index}
            src={achievement.icon}
            alt={achievement.name}
            className="w-16 h-16"
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsList;
