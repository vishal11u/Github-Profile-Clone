import React from "react";
import RepositoryList from "./RepositoryList";
import ContributionGraph from "./ContributionGraph";

interface ContentColumnProps {
  repositories: Array<{ name: string; owner?: string; language?: string }>;
  contributions: number[];
}

const ContentColumn: React.FC<ContentColumnProps> = ({
  repositories,
  contributions,
}) => {
  return (
    <div className="w-full md:w-2/3">
      <RepositoryList repositories={repositories} />
      <ContributionGraph contributions={contributions} />
    </div>
  );
};

export default ContentColumn;
