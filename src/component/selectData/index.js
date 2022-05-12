import { useState } from 'react'
import deagu from '../../data/deagu'
import sungnam from '../../data/sungnam'
import suwun from '../../data/suwun'
import './index.css'

function SelectData (props) {
    const [selectedData, setSelectedData] = useState(0)
    const [selectMenu, setSelectedMenu] = useState(0)

    const dataList = [
        {
            title: '무작위 값',
            menu: [
                {
                    title: '10개(10)',
                    data: new Array(10).fill(0).map(() => Math.floor(Math.random() * 100) + 1)
                },
                {
                    title: '100개(100)',
                    data: new Array(100).fill(0).map(() => Math.floor(Math.random() * 100) + 1)
                },
                {
                    title: '1,000개(1000)',
                    data: new Array(1000).fill(0).map(() => Math.floor(Math.random() * 100) + 1)
                },
                {
                    title: '10,000개(10000)',
                    data: new Array(10000).fill(0).map(() => Math.floor(Math.random() * 100) + 1)
                },
            ]
        },
        {
            title: '코로나 바이러스',
            menu: [
                {
                    title: '대구(' + deagu.length + ')',
                    data: deagu
                }
            ]
        },
        {
            title: '지방세 미환급',
            menu: [
                {
                    title: '성남시(' + sungnam.length + ')',
                    data: sungnam
                },
                {
                    title: '수원시(' + suwun.length + ')',
                    data: suwun
                }
            ]
        }
    ]

    function setData(num){
        setSelectedData(num)
        setSelectedMenu(0)
        props.setData(dataList[num].menu[0].data)
    }

    function setMenu(num){
        setSelectedMenu(num)
        props.setData(dataList[selectedData].menu[num].data)
    }

    return (
        <>
            <div className='select-button-list'>
                {dataList.map((data, index) => 
                    <div className='select-button' onClick={() => setData(index)}>
                        <span>{data.title}</span>
                    </div>
                )}
            </div>
            <div className='select-button-list'>
                {
                    dataList[selectedData].menu.map((data, index) => 
                        <div className='select-button' onClick={() => setMenu(index)}>
                            <span>{data.title}</span>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SelectData