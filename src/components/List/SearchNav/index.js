import React from 'react'

import styles from '../../../routes/List/index.css'
import base from '../../../index.css'

import {Link} from 'dva/router'

class SearchNav extends React.Component{
    render(){
        return(
            <div className={`${styles.header}   ${base.cl}`}>
                <Link to="/" style={{float:"left"}}><img src="//img.ddky.com/c/wap/images//homeList.png" className={`${styles.toHomeUrl} ${base.fl}`} alt=""/></Link>
                <div className={`${styles.headerLeft} ${base.fl}`}>
                    <img src="https://img.ddky.com/c/wap/images/ddky2/icon_search.png" alt="" /> 
                    <input type="search" placeholder="搜索药品、症状、品牌" className={styles.searchTxt} />
                </div>
                <img src="//img.ddky.com/c/wap/images//selectTab.png" className={`${styles.toChangeMode} ${base.fr}`} alt=""/> 
            </div>
        )
    }
}

export default SearchNav;