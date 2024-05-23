import React, { useState } from "react";
import { PiArrowFatDownBold, PiArrowFatUpBold } from "react-icons/pi";
import { db } from "../../../../utils/index";
import { Ideas } from "../../../../utils/schema";
import { RiFileCopy2Line, RiFileCopy2Fill } from "react-icons/ri";
import { eq } from "drizzle-orm";
import { checkIsAlreadyDownVoted, checkIsAlreadyUpVoted, downvote, upvote } from "../../../service";
import 'daisyui/dist/full.css';

const IdeaItem = ({ idea, index, refreshData }) => {
  const [isCopied, setIsCopied] = useState(false);

  const upVoteHandler = async () => {
    if (upvote(idea.id)) {
      const result = await db
        .update(Ideas)
        .set({ vote: idea.vote + 1 })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
      }
    }
  };

  const downVoteHandler = async () => {
    if (downvote(idea.id)) {
      const result = await db
        .update(Ideas)
        .set({ vote: idea.vote - 1 })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
      }
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(idea.content);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="my-10 border shadow-lg rounded-lg">
      <div className="p-5 flex gap-7 justify-between items-center">
        <h2 className="flex gap-2">
          <span>{index + 1}. </span>
          {idea?.content}
        </h2>
        <div className="flex flex-col items-center">
          <p
            className={`text-lg text-primary hover:bg-gray-200 rounded-md p-1 cursor-pointer ${
              checkIsAlreadyUpVoted(idea.id) && "bg-slate-200"
            }`}
            onClick={upVoteHandler}
          >
            <PiArrowFatUpBold />
          </p>
          <p className="p-1 font-bold text-lg text-center">{idea.vote}</p>
          <p
            className={`text-lg text-primary hover:bg-gray-200 rounded-md p-1 cursor-pointer ${
              checkIsAlreadyDownVoted(idea.id) && "bg-slate-200"
            }`}
            onClick={downVoteHandler}
          >
            <PiArrowFatDownBold />
          </p>
        </div>
      </div>
      <div className="relative p-5 border-t-2 flex justify-between items-center border-slate-100 text-gray-400">
        <p>
          By @{idea.username} on {idea.createdAt}

        </p>
          <button className="btn btn-sm p-2 btn-primary" onClick={copyToClipboard}>
            {isCopied ? <RiFileCopy2Fill /> : <RiFileCopy2Line />}
          </button>
      </div>
    </div>
  );
}

export default IdeaItem;
