import React from 'react'
import styles from '../../../routes/Home/index.css'


class DragList extends React.Component{
    state={
        yao:[
            {
                imgurl:"https://img.ddky.com/c/cms/temp/20190425/1556162658298_78_78.jpg",
                font:"感冒发烧"
            },
            {
                imgurl:"https://img.ddky.com/c/cms/temp/20190425/1556162353847_78_78.jpg",
                font:"清热解毒"
            },
            {
                imgurl:"https://img.ddky.com/c/cms/temp/20190425/1556162136151_78_78.jpg",
                font:"咳嗽用药"
            },
            {
                imgurl:"https://img.ddky.com/c/cms/temp/20190425/1556162300107_78_78.jpg",
                font:"皮肤用药"
            }

        ]
    }
    render(){
        return(
            <div className={styles.drugList}>
                {
                    this.state.yao.map((item,idx)=>{
                        return <div className={styles.drugType} >
                                    <img src={`${item.imgurl}`} key={idx}/>
                                    <p>{item.font}</p>
                                </div>
                    })
                }
            </div>
        )
    }
}

export default DragList;