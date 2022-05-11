function Graph (props){
     return (<>

        <svg width="300" height="300">
            <rect width="200" height="100" 
                style={{
                    fill:'rgb(255,255,255)',
                    'stroke-width': 1,
                    stroke:'rgb(0,0,0)'
                }} 
            />
            {props.calcList.map((each, index) => 
            <rect
                key={index}
                x={index * 20 + 10}
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