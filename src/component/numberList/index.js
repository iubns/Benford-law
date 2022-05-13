import { useState } from 'react'
import './index.css'

function NumberList (props) {
    const [showDataList, setShowDataList] = useState(false) 

    return (
        <div>
            <div onClick={() => setShowDataList(!showDataList)}>데이터 상세 내역 <span className='hide-show'>{showDataList ? '숨기기' : '펼치기'}</span> (펼치면 속도가 느려질 수 있어요!)</div>
            {showDataList &&
                <div className='number-list'>
                {props.originalNumberList.map((each, index) => 
                    <div 
                    className='number-span'
                    key={'number_' + index}>
                        {each} - {props.calcList[index]}
                    </div>
                )}
            </ div>}
        </div>
    )
}

export default NumberList