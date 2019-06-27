import React, {Component} from 'react';
// import {connect} from 'dva';
import styles from './My.css';
import {Link} from 'dva/router';
export default class HomePage extends Component {
    state = {
        isshow:true
    }
    setCookie(key,val,iday) {
        //key:键名  val:键值  iday：失效时间
        //document.cookie = 'name=malin;expires=date;path=/';
        var now = new Date();
        now.setDate(now.getDate() + iday);
        document.cookie = key + "=" + val + ";expires=" + now + ";path=/";
  }  
    getCookie(key){
        var str = document.cookie;
        var arr = str.split('; ');//以分号和空格隔开  [name=malin,psw=123456]
        for(var ele of arr){
              var arr2 = ele.split('=');
              if(key == arr2[0]){
                    return arr2[1];
              }
        }
    } 
    removeCookie(){
        this.setCookie('tels','',-1);
        this.props.history.push('/my')
    }
    componentDidMount(){
        //登录页面渲染
        let t = this.getCookie('tels')
        //账号
        if(t){
            this.refs.tels.innerHTML = t;
            this.setState({
                isshow:false
            })
        }else{
            this.setState({
                isshow:true
            })
        }
    }
    render() {
        return (
            <div>
                <header>
                    <div className={`${styles.myhead} ${styles.cl}`}>
                        <img
                            className={styles.headbg}
                            src="//img.ddky.com/c/wap/images/ddky3.1/personal_bg.png?ddkycache=6c353d4e65ab0794b5c0d1511c4663e7"/>
                        <div className={styles.headcont}>
                            <div className={`${styles.userIconBox} ${styles.fl}`}>
                                <img
                                    src={(!this.state.isshow)?'http://img.ddky.com/c/user/photo/zu-8@2x.png':'//img.ddky.com/c/wap/images/ddky3.1/personal_ren.png?ddkycache=9c4c02ca63e20bbb2ee58955fe5cd851'}/>
                            </div>
                            <div className={`${styles.userIconBox} ${styles.fl}`}>
                                <p className={styles.usertel} ref='tels' style={{display:(!this.state.isshow)? 'block':'none'}}></p>
                                <p className={styles.nologin} style={{display:(this.state.isshow)? 'block':'none'}}>
                                    <span id={styles.regbtn}><Link to='/Reg'>注册</Link></span>
                                    /
                                    <span id={styles.loginbtn}><Link to='/Login'>登录</Link></span>
                                </p>
                                <p
                                    className={styles.usertel}
                                    style={{
                                    'display': 'none'
                                }}></p>
                                <p
                                    className={styles.userother}
                                    style={{
                                    'display': 'none'
                                }}>
                                    <span id={styles.userName}></span>
                                    <span className={`${styles.unbundling} ${styles.none}`}>解绑微信</span>
                                    <span className={`${styles.bundling} ${styles.none}`}>绑定微信</span>
                                </p>
                            </div>
                            <div
                                className={`${styles.membercenterBox} ${styles.fr}`}
                                style={{
                                'display': 'none'
                            }}>
                                <img
                                    className={styles.member_icon}
                                    src="//img.ddky.com/c/wap/images/ddky3.1/personal_centericon.png?ddkycache=4864c29f5588bfb14a4d3e4b9fb21e95"/>
                                <div className={styles.memberInfo}>
                                    <p className={styles.member_rank}></p>
                                    <span className={styles.member_Money}></span>
                                </div>
                                <img
                                    className={styles.member_next}
                                    src="//img.ddky.com/c/wap/images/ddky3.1/iconwhite_left.png?ddkycache=9a44d4894196426b4d177bc0653e888d"/>
                            </div>
                        </div>
                    </div>
                </header>
                <nav className={`${styles.mynav} ${styles.successlogin}`}>
                    <ul className={`${styles.navlist} ${styles.cl}`}>
                        <li className={styles.waitpay}>
                            <a>
                                <i className={`${styles.icon} ${styles.iconfukuan}`}>
                                    <span className={`${styles.num} ${styles.paynum} ${styles.none}`}></span>
                                </i>
                                待付款
                            </a>
                        </li>
                        <li className={styles.currentorder}>
                            <a>
                                <i className={styles.icon}>
                                    <span className={`${styles.num} ${styles.dqnum} ${styles.none}`}></span>
                                </i>
                                当前订单
                            </a>
                        </li>
                        <li className={styles.waitcomment}>
                            <a>
                                <i className={`${styles.icon} ${styles.iconpingjia}`}>
                                    <span className={`${styles.num} ${styles.commnum} ${styles.none}`}></span>
                                </i>
                                待评价
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.mymain}>
                    <ul className={`${styles.mainlist} ${styles.cl}`}>
                        <li className={styles.allorder}>
                            <a>
                                <i className={`${styles.icon} ${styles.icon1}`}></i>
                                <strong>全部订单</strong>
                            </a>
                        </li>
                        <li className={styles.ddsl}>
                            <a>
                                <i className={`${styles.icon} ${styles.gifts}`}></i>
                                <strong>叮当送礼</strong>
                            </a>
                        </li>
                        <li className={styles.myyouhui}>
                            <a>
                                <i className={`${styles.icon} ${styles.iconyouhui}`}></i>
                                <strong>优惠券</strong>
                            </a>
                        </li>
                        <li className={`${styles.myicon} ${styles.none}`}>
                            <a>
                                <i className={`${styles.icon} ${styles.myicon}`}></i>
                                <strong>叮当币商城</strong>
                            </a>
                        </li>
                        <li className={styles.dizhiguanli}>
                            <a>
                                <i className={`${styles.icon} ${styles.icon2}`}></i>
                                <strong>地址管理</strong>
                            </a>
                        </li>
                        {/* <li className="liulanlishi"><a ><i className="icon icon3"></i>浏览历史</a></li> */}
                        {/* <li className="myshoucang"><a ><i className='icon icon-shoucang'></i>我的收藏</a></li> */}
                        <li>
                            <a href="https://m.ddky.com/app/ddky/zixun/custService.html">
                                <i className={`${styles.icon} ${styles.icon4}`}></i>
                                <strong>常见问题</strong>
                            </a>
                        </li>
                        <li className={styles.preSaleOrderList}>
                            <a>
                                <i className={`${styles.icon} ${styles.preSaleOrderList}`}></i>
                                <strong>预售订单</strong>
                            </a>
                        </li>
                    </ul>
                    <h1 className={styles.telebtn}>
                        <a href="javascript:">客服电话：95028</a>
                    </h1>
                </div>
                <footer className={styles.myfooter}>
                    <ul className={`${styles.footernav} ${styles.cl}`}>
                        <li className={styles.tohome}>
                            <a href="/">首页</a>
                        </li>
                        <li className={styles.toAPP}>
                            <a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.ddsy.songyao">客户端</a>
                        </li>
                        <li className={`${styles.hasUserli} ${styles.fr}`} style={{display:(!this.state.isshow)? 'block':'none',borderRight:'none'}}>
                            <Link className={styles.toquit} to='/'  onClick={this.removeCookie.bind(this)} >退出</Link>
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
}