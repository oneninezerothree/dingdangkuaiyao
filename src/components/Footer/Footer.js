import React, {Component} from 'react';
// import {connect} from 'dva';
import styles from './footer.css';
import {Link} from 'dva/router';

const style = {
    display: "none"
}
const bool = {
    img1 :true,
    img2 :false,
    img3 :false,
}
const imgUrl = {
    ind :"https://img.ddky.com/c/cms/temp/20181117/1542445952383_104_104.jpg",
    sc : "https://img.ddky.com/c/cms/temp/20181117/1542445962489_104_104.jpg",
    car : 'https://img.ddky.com/c/cms/temp/20181117/1542445969502_104_104.jpg'
}
export default class Footer extends Component {
    render() {
        return (
            <div id="box" className={`${styles.footBtn_w4} ${styles.footer} ${styles.cl}`}>
                <div className={`${styles.footerbtn} ${styles.IndexPage}`}>
                    <Link to='/'><img onClick={()=>{
                        bool.img1 = true;
                        bool.img2 = false;
                        bool.img3 = false;
                    }} src={bool.img1 ? imgUrl.ind : "https://img.ddky.com/c/cms/temp/20181117/1542445956477_104_104.jpg"}/></Link>
                </div>
                <div className={`${styles.footerbtn} ${styles.shoppingMall}`}>
                    <Link to="/"><img onClick={()=>{
                        bool.img2 = true;
                        bool.img1 = false;
                        bool.img3 = false ;           
                    }} src={ bool.img2 ? imgUrl.sc : "https://img.ddky.com/c/cms/temp/20181117/1542445964888_104_104.jpg"}/></Link>
                </div>
                <div className={`${styles.footerbtn} ${styles.whiteCart}`}>
                    <Link to='/'><img onClick={()=>{
                        bool.img3 = true;
                        bool.img1 = false
                        bool.img2 = false
                    }} src={ bool.img3 ? imgUrl.car : "https://img.ddky.com/c/cms/temp/20181117/1542445971938_104_104.jpg"}/></Link>
                    <span className={styles.cartNum} style={style}></span>
                </div>
                <div className={`${styles.footerbtn} ${styles.mine}`}>
                    <Link to='/my'><img onClick={()=>{
                        bool.img2 = false
                        bool.img3 = false
                    }} src="https://img.ddky.com/c/cms/temp/20181117/1542445977803_104_104.jpg"/></Link>
                </div>
            </div>
        )
    }
}
