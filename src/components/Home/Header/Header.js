import React,{Component}from 'react'

import styles from '../../../routes/Home/Home.css';

import base from '../../../index.css';
import {Link} from 'dva/router';



// import { Icon } from 'antd';

export default class Header extends Component{
    render(){
        return(
            // eslint-disable-next-line react/jsx-no-duplicate-props
            <div className={`${styles.header} ${base.cl}`}>
                <div className={`${styles.addrBox} ${base.fl}`}>
                    <img src="https://img.ddky.com/c/wap/images/ddky2/locaton_icon.png" alt=""/> 
                    <span>叮当智慧药房（广州）有限公司广州越秀东川路店</span> 
                    <img src="https://img.ddky.com/c/wap/images/ddky2/down_arrow.png" className={styles.down_arrow} alt=""/>
                </div>
                <div className={`${styles.searchBox} ${base.fr}`}>
                    <Link to='/search'>
                        <input type="text" placeholder="搜索药品、症状、品牌" /> 
                        <img src="https://img.ddky.com/c/wap/images/ddky2/big_glass.png" alt=""/>
                    </Link>
                </div>
            </div>
        )
    }
}

