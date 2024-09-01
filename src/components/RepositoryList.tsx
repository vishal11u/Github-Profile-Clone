import React from "react";

interface Repository {
  name: string;
  owner?: string;
  language?: string;
}

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font- mb-2">Popular repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repositories.map((repo, index) => (
          <div
            key={index}
            className="bg-gray-800 px-6 pt-3 h-[15vh] rounded-md border border-gray-700"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-blue-400 text-[14px] font-semibold">{repo.name}</h3>
              <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                Public
              </span>
            </div>
            {repo.owner && (
              <p className="text-sm text-gray-400 mt-1">{repo.owner}</p>
            )}
            {repo.language && (
              <div className="mt-4 flex items-center">
                <span className="w-3 h-3 bg-yellow-300 rounded-full mr-2"></span>
                <span className="text-sm text-gray-400">{repo.language}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
