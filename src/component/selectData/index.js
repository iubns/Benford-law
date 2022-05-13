import { useEffect, useState } from 'react'
import deagu from '../../data/covid/deagu'
import seongnam from '../../data/localTax/seongnam'
import suwon from '../../data/localTax/suwon'
import Incheon from '../../data/covid/incheon'
import sejong from '../../data/localTax/sejong'
import seoul08 from '../../data/fineDust/seoul08'
import seoul12 from '../../data/fineDust/seoul12'
import seoul16 from '../../data/fineDust/seoul16'
import seoul20 from '../../data/fineDust/seoul20'
import './index.css'

function SelectData (props) {
    const [selectedData, setSelectedData] = useState(0)
    const [selectMenu, setSelectedMenu] = useState(0)

    const dataList = [
        {
            title: '무작위 값',
            menu: [
                {
                    title: '10개',
                    data: new Array(10).fill(0).map(() => Math.floor(Math.random() * 100) + 1)
                },
                {
                    title: '100개',
                    data: new Array(100).fill(0).map(() => Math.floor(Math.random() * 100) + 1)
                },
                {
                    title: '1,000개',
                    data: new Array(1000).fill(0).map(() => Math.floor(Math.random() * 100) + 1)
                },
                {
                    title: '10,000개',
                    data: new Array(10000).fill(0).map(() => Math.floor(Math.random() * 100) + 1)
                },
                {
                    title: '100,000개',
                    data: new Array(100000).fill(0).map(() => Math.floor(Math.random() * 100) + 1)
                },
            ]
        },
        {
            title: '코로나 바이러스 감염자 수',
            menu: [
                {
                    title: '대구',
                    data: deagu.filter(value => value)
                },
                {
                    title: '인천 부평구',
                    data: Incheon.filter(value => value)
                },
            ]
        },
        {
            title: '지방세 미환급',
            menu: [
                {
                    title: '성남시',
                    data: seongnam
                },
                {
                    title: '수원시',
                    data: suwon
                },
                {
                    title: '세종시',
                    data: sejong
                }
            ]
        },{
            title: '미세먼지',
            menu: [
                {
                    title: '서울(08-11)',
                    data: seoul08
                },
                {
                    title: '서울(12-15)',
                    data: seoul12
                },
                {
                    title: '서울(16-19)',
                    data: seoul16
                },
                {
                    title: '서울(20-21)',
                    data: seoul20
                },
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

    useEffect(() => setData(0), [])

    return (
        <div className='root'>
            <div className='select-button-list'>
                {dataList.map((data, index) => 
                    <div 
                        className='select-button' 
                        onClick={() => setData(index)}
                        key={"s_" + index}
                    >
                        <span>{data.title}</span>
                    </div>
                )}
            </div>
            <div className='select-button-list'>
                {
                    dataList[selectedData].menu.map((data, index) => 
                        <div 
                            className='select-button' 
                            onClick={() => setMenu(index)}
                            key={"sk_" + index}
                        >
                            <span>{data.title}({data.data.length})</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SelectData