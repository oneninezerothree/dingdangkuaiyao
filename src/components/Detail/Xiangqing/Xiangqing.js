import React from 'react'

import {connect} from 'dva'
import styles from '../../../routes/Detail/Detail.css'
import base from '../../../index.css'

class Xiangqing extends React.Component{
    render(){
        return(
            <div id={styles.aboutInfo} className={`${styles.aboutInfo} ${base.none}`} style={this.props.example.toggletab === "xiangqing" ? {display:"block"} : {display:"none"}}>
            <div  className={styles.Instructions}>
                <p>说明书</p> 
                <div className={styles.nav}>
                    <span className={styles.active}>复方氨酚烷胺胶囊</span>
                </div> 
                <div className={styles.items}>
                    <img src="https://img.ddky.com/c/cms/instructions1/500616_0-181107015657477.png" alt="" />
                    <img src="https://img.ddky.com/c/cms/instructions1/500616_1-181107015657695.png" alt="" />
                    <img src="https://img.ddky.com/c/cms/instructions1/500616_2-181107015657727.png" alt="" />
                </div> 
                <div className={`${styles.ddYaoshi} ${base.cl}`}>
                    <img src="http://img.ddsy.com/c/cms/remind/500616_750_245-161209010937.png" alt="" />
                    <img src="http://img.ddsy.com/c/cms/taboo/500616_750_250-170110065015781.png" alt="" />
                </div>
            </div>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(Xiangqing)