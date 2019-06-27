import React from 'react'

import styles from '../../../routes/Detail/Detail.css'

import base from '../../../index.css'

import {connect} from 'dva'

class Topbox extends React.Component{
    showlist(){
        this.props.dispatch({
            type: 'example/isshow',  //这里的example是model的命名空间，"/"后面的表示model中effect的异步方法名
            isshow:!this.props.example.isshow                  //这个表示要传递参数，当然这里可以是一个方法，作为回调方法
          });
    }

    render(){
        return(
            <div className={styles.topbox}>
                <div className={`${styles.header} ${base.cl}`}>
                    <div className={`${styles.headListBox} ${base.fr}`} onClick={this.showlist.bind(this)}>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/classify_icon.png" alt="" className={base.fr} />
                    </div> 
                    <span className={styles.active}>商品</span>
                    <span className="">详情</span>
                    <span className="">评价</span>
                </div>
            </div>
        )
    }
}


export default connect((state) => {
    return state
})(Topbox)