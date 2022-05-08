import { useState } from 'react';
import './App.css';

function App() {
  const [startNumber, setStartNumber] = useState(0)
  const [endNumber, setEndNumber] = useState(0)
  const [numCount, setNumCount] = useState(0)

  const [numberList, setNumberList] = useState([])
  const [calcList, setCalcList] = useState([])

  function start(){
    if(endNumber < startNumber){
      alert('시작 값과 끝 값에 문제가 있음')
    }else if(numCount < 0){
      alert('개수 값에 문제가 있음')
    }

    const gap = endNumber - startNumber
    setNumberList(new Array(numCount).fill(0).map(() => Math.floor(Math.random() * gap) + startNumber))
    const cl = numberList.map(e => {
      let target = e
      while(target >= 10){
        target = Number.parseInt(target / 10);
      }
      return target
    })
    setCalcList(cl)
    console.log('다 하고보니 랜덤이 아닌 실존값. 망했...')
  }


  return (
    <div className="App">
      {startNumber}
      시작값 <input type="number" onChange={(e) =>setStartNumber(Number.parseInt(e.target.value))}/>
      종료값 <input type="number" onChange={(e) =>setEndNumber(Number.parseInt(e.target.value))}/>
      <br/>
      개수 <input type="number"  onChange={(e) =>setNumCount(Number.parseInt(e.target.value))}/>
      <button onClick={start}>시작</button>
      1개수 {calcList.filter(e => e === 1).length} <br/>
      2개수 {calcList.filter(e => e === 2).length} <br/>
      3개수 {calcList.filter(e => e === 3).length} <br/>
      4개수 {calcList.filter(e => e === 4).length} <br/>
      5개수 {calcList.filter(e => e === 5).length} <br/>
      6개수 {calcList.filter(e => e === 6).length} <br/>
      7개수 {calcList.filter(e => e === 7).length} <br/>
      8개수 {calcList.filter(e => e === 8).length} <br/>
      9개수 {calcList.filter(e => e === 9).length} <br/>
    </div>
  );
}

export default App;
