import React from "react";
import IdeaItem from "./IdeaItem";

const List = ({ ideaList, refreshData }) => {
  return (
    <div>
      {ideaList.length > 0 ? (
        ideaList.map((idea, index) => (
          <IdeaItem
            idea={idea}
            key={index}
            index={index}
            refreshData={refreshData}
          />
        ))
      ) : (
        <div className="flex flex-col my-7 gap-4 w-full">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      )}
    </div>
  );
};

export default List;
