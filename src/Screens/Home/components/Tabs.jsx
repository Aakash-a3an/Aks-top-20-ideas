import React, { useState } from "react";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  


  return (
    
      <div role="tablist" className="tabs z-30 sticky top-[1vh] tabs-boxed">
        <a
          href="/#hot"
          onClick={() => setActiveTab(0)}
          role="tab"
          className={`tab text-lg font-medium ${
            activeTab === 0 && 'tab-active'
          }`}
        >
          🔥Hot
        </a>
        <a
          href="/#new"
          onClick={() => setActiveTab(1)}
          role="tab"
          className={`tab text-lg font-medium ${
            activeTab === 1 && "tab-active"
          } `}
        >
          ✨New
        </a>
        <a
          href="/#top"
          onClick={() => setActiveTab(2)}
          role="tab"
          className={`tab text-lg font-medium ${
            activeTab === 2 && "tab-active"
          } `}
        >
          🏆Top
        </a>
      </div>
  );
};

export default Tabs;
