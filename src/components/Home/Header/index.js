import React from 'react'

import styles from '../../../routes/Home/index.css';

import base from '../../../index.css'

// import { Icon } from 'antd';

class Header extends React.Component{
    render(){
        return(
            // eslint-disable-next-line react/jsx-no-duplicate-props
            <div className={`${styles.header} ${base.cl}`}>
                <div className={`${styles.addrBox} ${base.fl}`}>
                    <img src="https://img.ddky.com/c/wap/images/ddky2/locaton_icon.png" /> 
                    <span>叮当智慧药房（广州）有限公司广州越秀东川路店</span> 
                    <img src="https://img.ddky.com/c/wap/images/ddky2/down_arrow.png" className={styles.down_arrow} />
                </div>
                <div className={`${styles.searchBox} ${base.fr}`}>
                    <input type="text" placeholder="搜索药品、症状、品牌" /> 
                    <img src="https://img.ddky.com/c/wap/images/ddky2/big_glass.png" />
                </div>
            </div>
        )
    }
}

export default Header;