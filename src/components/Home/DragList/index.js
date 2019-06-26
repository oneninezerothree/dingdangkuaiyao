import React from 'react'
import styles from '../../../routes/Home/index.css'

import { Link } from 'dva/router';


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
                        return <Link className={styles.drugType} to="/list" style={{color:"#000"}} key={idx}>
                                    <img src={`${item.imgurl}`} key={idx} alt=""/>
                                    <p>{item.font}</p>
                                </Link>
                    })
                }
            </div>
        )
    }
}

export default DragList;