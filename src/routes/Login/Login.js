import React, {Component} from 'react';
import styles from './Login.css';
import {Link} from 'dva/router';

export default class Login extends Component {
    state = {
        acTive: false,
        acTive2: true,
        isAgree: true,
        code:'mmp1'
    }
    componentDidMount(){
          //登录页面渲染
          let t = localStorage.getItem('tels');
          let p = localStorage.getItem('pwds');
          console.log(t,p);
          this.refs.tels.value = t;//账号
          this.refs.pwds.value = p;//密码
    
    }
    //给header添加类
    isActive() {
        this.setState({acTive: true, acTive2: false})

    }
    isActive2() {
        this.setState({acTive: false, acTive2: true})
    }
    isAgree() {
        this.setState({
            isAgree: !this.state.isAgree
        })
    }
    setCookie(key,val,iday) {
            //key:键名  val:键值  iday：失效时间
            //document.cookie = 'name=malin;expires=date;path=/';
            var now = new Date();
            now.setDate(now.getDate() + iday);
            document.cookie = key + "=" + val + ";expires=" + now + ";path=/";
      }  
        
    login(){
          if(this.refs.tels.value==localStorage.getItem('tels') && this.refs.pwds.value==localStorage.getItem('pwds')){
                //setcookie
                this.setCookie('tels',this.refs.tels.value);
                  this.props.history.push('/');
          }else{
                alert('请填写正确账号密码');
          }
    }
    randomCode(){
      this.state.code = '';
      let html = '0987654321zxcvbnmkjhgfdsaqwertyuioplZXCVBNMLKJHGFDSAQWERTYUIOP';
      for(let i = 0; i < 4; i++){
          let index = parseInt(Math.random() * html.length);
          this.state.code += html[index];
      }
      this.setState({
          code: this.state.code,   
      });
      // console.log(this.state.code);
  }

    render() {
        return (
            <div className={styles.headercon}>
                <header className={`${styles.loginheader} ${styles.cl}`} id={styles.loginheader}>
                    <a
                        onClick={this
                        .isActive
                        .bind(this)}
                        className={this.state.acTive
                        ? `${styles.active}`
                        : ''}>快速登录</a>
                    <a
                        onClick={this
                        .isActive2
                        .bind(this)}
                        className={this.state.acTive2
                        ? `${styles.active}`
                        : ''}>密码登录</a>
                </header>
                <div
                    className={styles.loginbox}
                    style={{
                    display: (this.state.acTive)
                        ? 'block'
                        : 'none'
                }}>
                    <ul className={`${styles.cl} ${styles.mb15}`}>
                        <li className={styles.cl}>
                            <input type="text"  placeholder="请输入图片验证码" className={`${styles.fl} ${styles.pic}`}/>
                            {/* <img
                                src="data:image/png;base64,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"
                                className="pic-check fl"/> */}
                             <span id={styles.yzm} onClick={
                                this.randomCode.bind(this)
                            }><del>{this.state.code}</del></span>
                        </li>
                        <li>
                            <input type="text"  placeholder="请输入手机号码" id={styles.user}/>
                            <i className={styles.cleartel}><img src="https://img.ddky.com/c/wap/images/wap/clear-tel.png"/></i>
                        </li>
                        <li className={styles.clli}>
                            <input
                                type="text"
                                placeholder="请输入验证码"
                                id="smsCode"
                                className={styles.smsCode}/>
                            <a className={`${styles.codebtn} ${styles.fl} ${styles.huoqu}`}>发送验证码</a>
                        </li>
                    </ul>
                    <p className={styles.voiceYanzheng}>
                        <span className={styles.not_get}>收不到验证码？请使用&nbsp;</span>
                        <span>
                            <a href="javascript:;" className={styles.voiceHuoqu}>免费语音获取</a>
                        </span>
                    </p>
                    <div className={styles.agreement}>
                        <img
                            src="https://img.ddky.com/c/wap/images/ddky2/oval_icon.png"
                            onClick={this
                            .isAgree
                            .bind(this)}
                            className={(this.state.isAgree)
                            ? `${styles.agreement1}`
                            : `${styles.none}`}/>
                        <img
                            src="https://img.ddky.com/c/wap/images/ddky2/oval_active.png"
                            onClick={this
                            .isAgree
                            .bind(this)}
                            className={(!this.state.isAgree)
                            ? `${styles.agreement2}`
                            : `${styles.none}`}/>
                        我已认真阅读，理解并同意
                        <a href="https://www.ddky.com/mobiledoc/xieyi.html">《叮当快药用户协议》</a>及<a href="https://m.ddky.com/app/ddky/zhyf/privacy.html">《叮当快药隐私协议》</a>
                    </div>
                    <div className={`${styles.loginbtnbox} ${styles.cl}`}>
                        <p
                            className={styles.btnlogin}
                            style={{
                            backgroundColor: (this.state.isAgree)
                                ? 'rgb(204,204,204)'
                                : 'rgb(204, 51, 51)',
                            pointerEvents: (this.state.isAgree)
                                ? ''
                                : 'none'
                        }}>登录</p>
                    </div>
                </div>
                <div
                    className={styles.loginbox}
                    style={{
                    display: (this.state.acTive2)
                        ? 'block'
                        : 'none'
                }}>
                    <ul className={`${styles.cl} ${styles.mb15}`}>
                        <li>
                            <input type="text" id="tel" ref="tels" placeholder="请输入手机号码" className={styles.user}/>
                        </li>
                        <li>
                            <input type="password" ref="pwds" placeholder="请输入登录密码" className={styles.pwd}/>
                        </li>
                        <li className="last">
                            <a href="resetpassword.html" className={`${styles.fl} ${styles.forget}`}>忘记密码 ?</a>
                        </li>
                    </ul>
                    <div className={`${styles.cl} ${styles.loginbtnbox}`}>
                        <a className={styles.loginbtn} onClick={this.login.bind(this)}>登录</a>
                        <p className={styles.goreg}>还没有账号？快去<Link className={styles.startzhuce} to="/Reg">注册一下</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}