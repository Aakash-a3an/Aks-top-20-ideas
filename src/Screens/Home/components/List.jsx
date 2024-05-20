import React from "react";
import IdeaItem from "./IdeaItem";

const List = ({ ideaList, refreshData }) => {
  return (
    <div>
      {ideaList.length > 0 ? (
        ideaList.map((idea, index) => <IdeaItem idea={idea} key={index}
        index={index} refreshData={refreshData} />)
      ) : (
        <p>Loading ideas...</p>
      )}
    </div>
  );
};

export default List;
