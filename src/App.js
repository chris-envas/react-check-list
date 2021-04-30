/*
 * @Author: your name
 * @Date: 2021-04-29 17:21:41
 * @LastEditTime: 2021-04-30 11:29:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-book\src\App.js
 */
import React, { useState } from "react"
import 'antd/dist/antd.css';
import { listData } from "./mock/data"
import PriceList from "./components/PriceList"
import ViewTab from "./components/ViewTab"
import { LIST_VIEW, LIST_CHART } from "./utility"
import DatePicker from "./components/DatePicker"

function App () {
  const handleDateChange = () => {}

  const [mode, setMode] = useState(LIST_VIEW)
  const handleModeChange = (e) => {
    const value = e.target.value
    value === LIST_CHART ? setMode(LIST_CHART) : setMode(LIST_VIEW)
  }

  const onModifyItem = () => { }
  const onDeleteItem = () => { }
  return (
    <div className="App">
      <DatePicker
        handleDateChange={handleDateChange}
      />
      <ViewTab
        mode={mode}
        handleModeChange={handleModeChange}
      />
      <PriceList
        items={listData}
        onModifyItem={onModifyItem}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default App;
