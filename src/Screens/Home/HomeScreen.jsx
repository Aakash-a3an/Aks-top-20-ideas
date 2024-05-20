import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import { useLocation } from "react-router-dom";
import { db } from "../../../utils";
import { Ideas } from "../../../utils/schema";
import { desc } from "drizzle-orm";
import List from "./components/List";

const HomeScreen = () => {




  const params =useLocation();
  const [ideaList,setIdeaList] = useState([]);
  useEffect(()=>{
    GetAllIdeas();
  },[params])

  const GetAllIdeas=async()=>{
    const result=await db.select().from(Ideas)
    .orderBy(desc(params.hash=='#hot'||params.hash=='#top'?Ideas.vote:Ideas.id))
    .limit(20);

    setIdeaList(result);
  }

  return (
    <div>
        <Header />
        <Hero />
        <Tabs />
        <List ideaList={ideaList} refreshData={GetAllIdeas} />
    </div>
  );
};

export default HomeScreen;
