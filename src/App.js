import { useState } from 'react';
import Graph from './component/graph'
import NumberList from './component/numberList'
import './App.css';

function App() {
  const [startNumber, setStartNumber] = useState(1)
  const [endNumber, setEndNumber] = useState(100)
  const [numCount, setNumCount] = useState(100000)

  const [numberList, setNumberList] = useState([])
  const [calcList, setCalcList] = useState([])
  const [filterList, setFilterList] = useState([])

  function start(){
    if(endNumber < startNumber){
      alert('시작 값과 끝 값에 문제가 있음')
    }else if(numCount < 0){
      alert('개수 값에 문제가 있음')
    }

    const gap = endNumber - startNumber
    const numlist = new Array(numCount).fill(0).map(() => Math.floor(Math.random() * gap) + startNumber)
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
        1개수 {filterList[0]} <br/>
        2개수 {filterList[1]} <br/>
        3개수 {filterList[2]} <br/>
        4개수 {filterList[3]} <br/>
        5개수 {filterList[4]} <br/>
        6개수 {filterList[5]} <br/>
        7개수 {filterList[6]} <br/>
        8개수 {filterList[7]} <br/>
        9개수 {filterList[8]} <br/>
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
