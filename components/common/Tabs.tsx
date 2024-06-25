import { ISignFindInfoTableTabs } from "@/constant/signin/signinFindInfoTableFields";

export interface ITabs {
  tabsData: ISignFindInfoTableTabs[];
  activeTab: string;
  activeTabClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tabs = ({ tabsData, activeTab, activeTabClickHandler }: ITabs) => {
  return (
    <div className="w-full flex justify-between">
      {tabsData.map((tab, index_st) => (
        <button
          key={index_st}
          onClick={activeTabClickHandler}
          type="button"
          className={`w-full border-b-[3px] rounded-t py-3 ${
            activeTab === tab.tab_id
              ? "border-black text-black"
              : "border-gray-300 text-gray-300"
          }`}
          value={tab.tab_id}
        >
          {tab.tab_name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
