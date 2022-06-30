import { CrayonTabs } from "@accelo/crayon-react";
import { useState } from "react";

export const Tabs = () => {
  const [tab, setTab] = useState<number>(0);

  const tabs = [
    {
      title: "Tab Item",
      value: 0,
    },
    {
      title: "Tab Item",
      value: 1,
    },
    {
      title: "Tab Item",
      value: 2,
    },
    {
      title: "Tab Item",
      value: 3,
      disabled: true,
    },
  ];
  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setTab(value);
  };
  return <CrayonTabs onChange={handleChange} tabs={tabs} value={tab} />;
};
