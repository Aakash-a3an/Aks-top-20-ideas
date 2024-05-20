import React from "react";
import { PiArrowFatDownBold } from "react-icons/pi";
import { PiArrowFatUpBold } from "react-icons/pi";
import { db } from "../../../../utils/index";
import { Ideas } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import { checkIsAlreadyDownVoted, checkIsAlreadyUpVoted, downvote, upvote } from "../../../service";

const IdeaItem = ({ idea, index, refreshData }) => {
  const upVoteHandler = async () => {
    if (upvote(idea.id)) {
      const result = await db
        .update(Ideas)
        .set({
          vote: idea.vote + 1,
        })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
      }
    }
  };

  const downVote = async () => {
    if (downvote(idea.id)) {
      const result = await db
        .update(Ideas)
        .set({
          vote: idea.vote - 1,
        })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
      }
    }
  };

  return (
    <>
      <div className="my-10 border shadow-lg rounded-lg">
        <div className="p-5 flex gap-7 justify-between align-items: flex-end">
          <h2 className="flex gap-2">
            <span>{index + 1}. </span>
            {idea?.content}
          </h2>
          <div className="flex flex-col items-center">
            <p
              className={`text-lg text-primary hover:bg-gray-200 rounded-md p-1 cursor-pointer ${
                checkIsAlreadyUpVoted(idea.id) && "bg-slate-200"
              }`}
              onClick={() => upVoteHandler()}
            >
              <PiArrowFatUpBold />
            </p>
            <p className="p-1 font-bold text-lg text-center">{idea.vote}</p>
            <p
              className={`text-lg text-primary hover:bg-gray-200 rounded-md p-1 cursor-pointer ${checkIsAlreadyDownVoted(idea.id)&&'bg-slate-200'}`}
              onClick={() => downVote()}
            >
              <PiArrowFatDownBold />
            </p>
          </div>
        </div>
        <p className="p-5 border-t-2 border-slate-100 text-gray-400">
          By @{idea.username} on {idea.createdAt}
        </p>
      </div>
    </>
  );
};

export default IdeaItem;
