"use client"
import React, { useState } from "react";
import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";

interface ContributionGraphProps {
  contributions: {
    date: string;
    count: number;
  }[];
}

const ContributionGraph: React.FC<ContributionGraphProps> = ({
  contributions,
}) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const years = Array.from({ length: 3 }, (_, i) => currentYear - i);
  const filteredContributions = contributions.filter(
    (contribution) => new Date(contribution.date).getFullYear() === selectedYear
  );

  return (
    <div className="flex">
      <div className="flex-grow">
        <h2 className="text-[14px] font-semibold mb-2">
          8 Contributions in 2024
        </h2>
        <div className="relative">
          <HeatMap
            value={filteredContributions}
            style={{
              border: "0.5px solid gray",
              width: "100%",
              overflowX: "scroll",
              height: "22vh",
              marginLeft: "-5px",
              marginTop: "5px",
              borderRadius: "5px 5px 0px 0px",
              color: "white",
              padding: "10px 20px",
            }}
            rectSize={11}
            weekLabels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
            startDate={new Date(`${selectedYear}/01/01`)}
            endDate={new Date(`${selectedYear}/12/31`)}
            monthPlacement="top"
            monthLabels={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            legendCellSize={11}
            legendRender={(props) => <rect {...props} rx={2} />}
            rectProps={{ rx: 2.5 }}
            rectRender={(props, data) => (
              <Tooltip placement="bottom" content={`count: ${data.count || 0}`}>
                <rect {...props} />
              </Tooltip>
            )}
          />
          <div className="absolute bottom-0 left-0 right-0 flex gap-x-16 pb-4 items-center px-4 py-1 text-xs text-gray-500">
            <span className="mr-0 text-[11px]">Less</span>
            <span className="text-[11px]">More</span>
          </div>
        </div>
      </div>
      <div className="ml-4 flex flex-col">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`pl-4 pr-14 py-2 text-[13px] font-light text-left mb-2 rounded-lg ${
              selectedYear === year ? "bg-blue-500 text-white" : ""
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContributionGraph;
