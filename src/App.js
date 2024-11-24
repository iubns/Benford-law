import { useEffect, useState } from "react"
import Graph from "./component/graph"
import NumberList from "./component/numberList"
import SelectData from "./component/selectData"
import "./App.css"
import PercentageByNumber from "./component/percentageByNumber"

function App() {
  const [dataList, setData] = useState([0])
  const [processedData, setProcessedData] = useState([])
  const [filterList, setFilterList] = useState([])

  const [renderCount, setRenderCount] = useState(0)

  function renderAndCalc() {
    const numberCount = new Array(9).fill(0)
    const processedData = dataList.map((e) => {
      let target = e
      while (target >= 10) {
        target = Number.parseInt(target / 10)
      }
      numberCount[target - 1]++
      return target
    })
    setProcessedData(processedData)
    setFilterList(numberCount.map((count) => (count / dataList.length) * 100))
  }

  function SetDataAndRender(dataList) {
    setData(dataList)
    setRenderCount(renderCount + 1)
  }

  useEffect(renderAndCalc, [renderCount])

  return (
    <div className="App">
      <SelectData setData={SetDataAndRender} />
      <div className="result-area">
        <Graph className="each-area" calcList={filterList} />
        <PercentageByNumber className="each-area" filterList={filterList} />
        {/* 과연 꼭 필요한가?...
          <NumberList
            className='each-area'
            originalNumberList={dataList}
            calcList={processedData}
          />
        */}
      </div>
    </div>
  )
}

export default App
