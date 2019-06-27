import React from 'react'

import styles from '../../../routes/List/List.css'
import base from '../../../index.css'

import axios from 'axios'

import {Link} from 'dva/router'

class DragItem extends React.Component{
    state={
        druglist:[]
    }

    async renderList(){
        const listdata = (await axios.get('https://www.easy-mock.com/mock/5d120766806bf865488e49bd/getdetail')).data.data
        this.setState({
            druglist :　listdata
        })
        // console.log(this.state.druglist);
    }

    componentDidMount(){
        this.renderList();   
    }

    // componentWillMount(){
    //     console.log(this);
    // }

    // gotoDetail(shopid){
    //     this.props.router.push({pathname: '/detail', query: {id: shopid}})
    // }

    render(){
        return(
            <div className={styles.content}>   
                <div className={styles.item_one}> 
                    {
                        this.state.druglist.map((item,idx)=>{
                            return     <Link to={'/detail/?'+item.shopid} key={idx}>
                                        <dl className={base.cl} >
                                            <dt className={base.fl}>
                                                <img src={`${item.img[0]}`} alt=""/>
                                            </dt>
                                            <dd className={`${styles.goodsInfo} ${base.fr}`}>
                                                <h3>
                                                    <span className={styles.sign}>28分钟</span>
                                                    {item.name}
                                                </h3>
                                                <p className={styles.zhuzhi_info}>{item.describe}</p>
                                                <p className={styles.other}>{item.num}</p>
                                                <div className={`${styles.goods_buyBox} ${base.cl}`}>
                                                    <div className={`${styles.aboutLeft} ${base.fl}`}>
                                                        <p className={`${styles.setmeal} ${base.fl}`}>￥{item.price}</p>
                                                        <p className={`${styles.sales} ${base.fl}`}>月售{item.sale}笔</p>
                                                    </div>
                                                    <img src="//img.ddky.com/c/wap/images//listShop.png?ddkycache=ad2d8d2beddf679ce7c2acbc7f79c59f" className={`${styles.addCarImg} ${base.fr}`} alt=""/>
                                                </div>
                                                <div className={styles.prootiomBox}>
                                                    <span className={styles.promotion}>1元换购</span>
                                                </div>
                                            </dd>
                                    </dl>
                                </Link>
                        })
                    }
                </div>    
            </div>
        )
    }
}


export default DragItem;