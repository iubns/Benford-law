import './index.css'

function PercentageByNumber(props) {
    const expectedValue = [30.1, 17.61, 12.5, 9.69, 7.92, 6.69, 5.8, 5.11, 4.58]
  
    return (
      <div className='percent-root'>
        <div className='percent'>
          <div className='card-title'>백분율(기댓값)</div>
          {props.filterList.map((each, index) => 
          <div 
            className='number-row'
            key={'percent_' + index}>
            <b>{index + 1}</b> <span className='percent-number'> {each.toFixed(2)}%  ({expectedValue[index]}%)</span>
            <br/>
          </div>)}
        </div>
      </div>
    )
}

export default PercentageByNumber