import './index.css'

function Graph (props){
    const SVG_HEIGHT = 210;
    const SVG_WIDTH = 600;
    const horizontalLine = new Array(5).fill(0).map((value, index) => (index + 1) * 25)

    function getXPositionFromIndex(x){
        return x * (SVG_WIDTH / 10) + 35
    }

     return (<>
        <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
            {horizontalLine.map(value => 
                <line 
                    key={'line_' + value }
                    x1="27"
                    x2={SVG_WIDTH}
                    y1={SVG_HEIGHT - value * 2}
                    y2={SVG_HEIGHT - value * 2}
                    style={{
                        stroke:'rgb(30,30,30)',
                        strokeWidth: 0.2
                    }}
                />
            )}

            <line
                x1="0"
                x2={SVG_WIDTH}
                y1={SVG_HEIGHT}
                y2={SVG_HEIGHT}

                style={{
                    stroke:'rgb(30,30,30)',
                    strokeWidth: 0.2
                }}
            />

            {props.calcList.map((each, index) => 
                <rect
                    key={'rect_' + index}
                    x={getXPositionFromIndex(index)}
                    y={SVG_HEIGHT - each * 2}
                    width={SVG_WIDTH / 15 }
                    height={each * 2}
                    className="percent-bar"
                />
            )}

            {props.calcList.map((each, index) => 
                <text
                    key={'percent_text_' + index}
                    x={getXPositionFromIndex(index) +
                        (Math.floor(each) + '').length + (SVG_WIDTH / 100)
                    }
                    y={SVG_HEIGHT - 5 - each * 2}
                    className='percent-text'
                >
                    {Math.floor(each)}%
                </text>
            )}

            {horizontalLine.map((value, index) => 
                <text
                    key={'guide_text_' + index}
                    x="0"
                    y={SVG_HEIGHT + 2 - value * 2}
                    className="guide-text"
                >
                    {value}%
                </text>
            )}
        </svg>
     </>)
}

export default Graph;