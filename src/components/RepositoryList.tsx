import React from "react";

interface Repository {
  name: string;
  owner?: string;
  language?: string;
}

interface RepositoryListProps {
  repositories: Repository[];
}

const getLanguageColor = (language: string | undefined) => {
  switch (language) {
    case "JavaScript":
      return "bg-yellow-300";
    case "TypeScript":
      return "bg-blue-500";
    case "Java":
      return "bg-red-500";
    case "Python":
      return "bg-green-500";
    case "C++":
      return "bg-purple-500";
    case "HTML/CSS":
      return "bg-pink-500";
    default:
      return "bg-gray-500";
  }
};

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div className="mb-8">
      <h2 className="text-[15px] font-semibold mb-2">Popular repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repositories.map((repo, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-md border border-gray-700 flex flex-col h-[100px]"
          >
            <div className="flex justify-between items-start mb-">
              <h3 className="text-blue-400 text-[14px] font-semibold">
                {repo.name}
              </h3>
              <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                Public
              </span>
            </div>
            {repo.owner && (
              <p className="text-sm text-gray-400 mb-3">{repo.owner}</p>
            )}
            <div className="mt-auto">
              {repo.language && (
                <div className="flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-2 ${getLanguageColor(
                      repo.language
                    )}`}
                  ></span>
                  <span className="text-sm text-gray-400">{repo.language}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
