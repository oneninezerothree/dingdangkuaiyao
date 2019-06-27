import React, {Component} from 'react';
import styles from './Reg.css';
import axios from 'axios';

export default class Reg extends Component {
      state= {
            isShow:true,
            yes :'url(http://img.ddsy.com/c/wap/images/wap/useryes.png)',
            not:'url(http://img.ddsy.com/c/wap/images/wap/usernot.png',
            code:'cxk6',
            telValue:'',
            yzm:'',
            pwd:'',
            telinf:'',
            pwdinf:''
        }
        //验证码
        getyzm(e) {
            console.log(e.target.value)
            this.setState({
                yzm: e.target.value
            });
            if(e.target.value == this.state.code){
                console.log('验证码正确');
            }else{
                alert('验证码不正确');
            }
        }
        //清空电话号码
        deltel(){ 
            this.refs.tels.value = '';
        }
        //验证电话号码
        gettelValue(e) {
            // console.log(e.target.value)
            let reg = /^1[3-9]\d{9}$/;
            let res = reg.test(e.target.value);
            this.setState({
                telValue: e.target.value
            });
            if(this.refs.tels.value){//非空验证
                if(res){
                    console.log('电话号码格式正确');
                    this.setState({
                        telinf: '手机号码正确'
                    });
                }else{
                    this.setState({
                        telinf: '手机号码错误'
                    });
                }
            }else{
                this.setState({
                    telinf: '手机号码不能为空'
                });
            }
        }
        //验证密码
        getPwd(e){
            this.setState({
                pwd: e.target.value
            });
            if(this.refs.pwds.value){
                if(this.refs.pwds.value.length > 5){
                    this.setState({
                        pwdinf: '密码符合要求'
                    });
                }else{
                    this.setState({
                        pwdinf: '密码不能小于6个字符'
                    });
                }
            }else{
                this.setState({
                    pwdinf: '密码不能为空'
                });
            }
        }
        //勾选协议才能注册
        toggle() {
            this.setState({
                isShow: !this.state.isShow
            });
        }
        //点击按钮注册
        register(){
           let userinfo = [];
           let obj = {}
            if(this.refs.codes.value && this.refs.tels.value && this.refs.pwds.value){
                obj.phone = this.refs.tels.value;
                obj.pwd = this.refs.pwds.value;
                userinfo.push(obj);
                // userinfo.join('');
                localStorage.setItem('tels',this.refs.tels.value);
                localStorage.setItem('pwds',this.refs.pwds.value);
                this.props.history.push('/Login');
                
            }else{
                alert('你填写的信息不完整')
            }
            // console.log(this.refs.codes.value,this.refs.tels.value,this.refs.pwds.value)
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
            console.log(this.state.code);
        }
    render() {
        return (
            <div>
                <div className={styles.regcontent}>
                    <ul className={`${styles.reglist} ${styles.mb25} ${styles.cl}`}>
                        <li>
                            <input type="text"  placeholder="请输入验证码" className={`${styles.fl} ${styles.pic}`} ref='codes' onBlur={this.getyzm.bind(this)}/> 
                            <span id={styles.yzm} onClick={
                                this.randomCode.bind(this)
                            }><del>{this.state.code}</del></span>
                        </li>
                        <li>
                            <input type="text" placeholder="请输入手机号码" id="tel" className={`${styles.fl} ${styles.user}`} ref='tels' onChange={()=>{
                                this.setState({
                                    telValue: this.state.telValue
                                });
                            }} onBlur={this.gettelValue.bind(this)}/>
                            <i className={styles.cleartel} onClick={
                                this.deltel.bind(this)
                            }>
                                <img src="https://img.ddky.com/c/wap/images/wap2.0/clear-tel.png"/></i>
                        </li>

                        <li>
                            <input type="password" name="" placeholder="请设置登录密码" className={`${styles.fl} ${styles.pwd}`} ref='pwds' onBlur={this.getPwd.bind(this)}/>
                        </li>
                        <li className={styles.clli}>
                            <input type="text" name="" placeholder="请输入收到的验证码" className={`${styles.fl} ${styles.smsCode}`}/>
                            <a className={`${styles.fl} ${styles.codebtn}`}>发送验证码</a>
                        </li>
                    </ul>
                    <p className={styles.voiceYanzheng}>
                        <span className={styles.not_get}>收不到验证码？请使用&nbsp;</span>
                        <span>
                            <a className={styles.voiceHuoqu}>免费语音获取</a>
                        </span>
                    </p>
                </div>
                <footer className={styles.foot}>
                    <div className={styles.regbtnbox}>
                        <p className={styles.agree}>

                            <span id='telinf' style={{'fontSize':'16px','color':'black','marginTop':'10px','display':'block'}}>{this.state.telinf}</span>
                            <span id='pwdinf' style={{'fontSize':'16px','color':'black','marginTop':'10px','display':'block'}}>{this.state.pwdinf}</span>
                            <i className={styles.useryes} onClick={
                                 this.toggle.bind(this)
                              //     console.log(this.state.isShow);
                            } style={{
                                  backgroundImage:(this.state.isShow)? this.state.yes:this.state.not
                                  }}></i>
                                  
                            <span className={styles.userpro}>同意用户协议</span>
                        </p>
                        <a className={styles.regbtn} onClick={
                              this.register.bind(this)
                               
                            } 
                            style={{
                                  backgroundColor:(this.state.isShow)?'rgb(204, 51, 51)':'rgb(204, 204, 204)',
                                  pointerEvents:(this.state.isShow)?'':'none'
                              }}>注册
                        </a>
                    </div>
                </footer>
            </div>
        )
    }
}
