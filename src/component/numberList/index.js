import './index.css'

function NumberList (props) {
    return (
        <div className="number-result-scope">
            {props.originalNumberList.map((each, index) => 
                <div className='number-span'>
                    {each} - {props.calcList[index]}
                </div>
            )}
        </ div>
    )
}

export default NumberList