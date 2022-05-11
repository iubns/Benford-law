function Graph (props){
     return (<>

        <svg width="500" height="300">
            <rect width="400" height="100" 
                style={{
                    fill:'rgb(255,255,255)',
                    'stroke-width': 1,
                    stroke:'rgb(0,0,0)'
                }} 
            />
            {props.calcList.map((each, index) => 
            <rect
                key={index}
                x={index * 20}
                y={100 - each}
                width="10"
                height={each}
                style={{
                    fill:'rgb(255,255,255)',
                    'stroke-width': 1,
                    stroke:'rgb(0,0,0)'
                }} 
            />
            )}
        </svg>
     </>)
}

export default Graph;