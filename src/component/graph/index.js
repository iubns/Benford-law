function Graph (props){
    const horizontalLine = new Array(9).fill(10).map((value, index) => (index + 1) * 10)

     return (<>
        <svg width="300" height="200">
            <rect width="300" height="200" 
                style={{
                    fill:'rgb(255,255,255)',
                    strokeWidth: 1,
                    stroke:'rgb(0,0,0)'
                }} 
            />
            {props.calcList.map((each, index) => 
                <rect
                    key={'rect_' + index}
                    x={index * 30 + 20}
                    y={200 - each * 2}
                    width="20"
                    height={each * 2}
                    style={{
                        fill:'rgb(255,0,0)',
                        strokeWidth: 1,
                        stroke:'rgb(0,255,255)'
                    }} 
                />
            )}

            {horizontalLine.map(value => 
                <line 
                    key={'line_' + value }
                    x1="0"
                    x2="300"
                    y1={200 - value * 2}
                    y2={200 - value * 2}
                    style={{
                        stroke:'rgb(30,30,30)',
                        strokeWidth: 0.2
                    }}
                />
            )}
        </svg>
     </>)
}

export default Graph;