import './index.css'

function PercentageByNumber(props) {
    const expectedValue = [30.1, 17.61, 12.5, 9.69, 7.92, 6.69, 5.8, 5.11, 4.58]
  
    return (
      <div className='percent-root'>
        <div className='percent'>
          {props.filterList.map((each, index) => 
          <div key={'percent_' + index}>
            {index + 1} = {each.toFixed(2)}%  ({expectedValue[index]}%)<br/>
          </div>)}
        </div>
      </div>
    )
}

export default PercentageByNumber