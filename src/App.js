import { useEffect, useState } from 'react';
import Graph from './component/graph'
import NumberList from './component/numberList'
import SelectData from './component/selectData';
import './App.css';

function App() {
  const [numberList, setNumberList] = useState([])
  const [calcList, setCalcList] = useState([])
  const [filterList, setFilterList] = useState([])

  const [dataList, setData] = useState([1])

  const expectedValue = [30.1, 17.61, 12.5, 9.69, 7.92, 6.69, 5.8, 5.11, 4.58]

  useEffect(start, dataList)

  function start(){
    const numlist = dataList
    setNumberList(numlist)
    const cl = numlist.map(e => {
      let target = e
      while(target >= 10){
        target = Number.parseInt(target / 10);
      }
      return target
    })
    setCalcList(cl)
    setFilterList([
      cl.filter(e => e === 1).length / cl.length * 100,
      cl.filter(e => e === 2).length / cl.length * 100,
      cl.filter(e => e === 3).length / cl.length * 100,
      cl.filter(e => e === 4).length / cl.length * 100,
      cl.filter(e => e === 5).length / cl.length * 100,
      cl.filter(e => e === 6).length / cl.length * 100,
      cl.filter(e => e === 7).length / cl.length * 100,
      cl.filter(e => e === 8).length / cl.length * 100,
      cl.filter(e => e === 9).length / cl.length * 100,
    ])
  }

  return (
    <div className="App">
      <SelectData setData={setData}/>
      <div className='result-area'>
        <div className='percent'>
          {filterList.map((each, index) => <>
            {index + 1}개수 {each.toFixed(2)} / 기댓값 : {expectedValue[index]}<br/>
          </>)}
        </div>
        <div className='mumber-list'>
          <NumberList
            originalNumberList={numberList}
            calcList={calcList}
          />
        </div>
        <Graph
          calcList={filterList}
        />
      </div>
    </div>
  );
}

export default App;
