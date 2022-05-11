import { useState } from 'react';
import Graph from './component/graph'
import NumberList from './component/numberList'
import deagu from './data/deagu'
import './App.css';

function App() {
  const [startNumber, setStartNumber] = useState(1)
  const [endNumber, setEndNumber] = useState(100)
  const [numCount, setNumCount] = useState(1000)

  const [numberList, setNumberList] = useState([])
  const [calcList, setCalcList] = useState([])
  const [filterList, setFilterList] = useState([])

  const expectedValue = [30.1, 17.61, 12.5, 9.69, 7.92, 6.69, 5.8, 5.11, 4.58]

  function start(){
    if(endNumber < startNumber){
      alert('시작 값과 끝 값에 문제가 있음')
    }else if(numCount < 0){
      alert('개수 값에 문제가 있음')
    }

    const gap = endNumber - startNumber
    //const numlist = new Array(numCount).fill(0).map(() => Math.floor(Math.random() * gap) + startNumber)
    const numlist = deagu
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
      {startNumber}
      시작값 <input type="number" onChange={(e) =>setStartNumber(Number.parseInt(e.target.value))}/>
      종료값 <input type="number" onChange={(e) =>setEndNumber(Number.parseInt(e.target.value))}/>
      <br/>
      개수 <input type="number"  onChange={(e) =>setNumCount(Number.parseInt(e.target.value))}/>
      <button onClick={start}>시작</button>
      <div className='result-area'>
        <br/>
        {filterList.map((each, index) => <>
          {index + 1}개수 {each.toFixed(2)} / 기댓값 : {expectedValue[index]}<br/>
        </>)}
        <NumberList
          originalNumberList={numberList}
          calcList={calcList}
        />
        <Graph
          calcList={filterList}
        />
      </div>
    </div>
  );
}

export default App;
