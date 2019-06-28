import React, {Component} from 'react';
import styles from './Search.css';

export default class Search extends Component {
    render() {
        return (
            <div id="search">
                <div className={`${styles.header} ${styles.cl}`}>
                    <div className={`${styles.headerLeft} ${styles.fl}`}><img src="https://img.ddky.com/c/wap/images/ddky2/icon_search.png"/>
                        <input
                            type="text"
                            placeholder="搜索药品、症状、品牌"
                            autoFocus="autofocus"
                            className={styles.searchTxt}/></div>
                    <span className={`${styles.toSearch} ${styles.fr}`}>搜索</span>
                </div>
                <div className={styles.hotSearchBox}>
                    <p>热门搜索</p>
                    <ul className={`${styles.hot_search} ${styles.cl}`}>
                        <li>拜耳</li>
                        <li>中美史克</li>
                        <li>优思明</li>
                        <li>曼秀雷敦</li>
                        <li>神威</li>
                        <li>避孕</li>
                        <li>腹泻</li>
                        <li>皮肤过敏</li>
                        <li>EVE止痛</li>
                        <li>日本爆款3折起</li>
                    </ul>
                </div>
                <div className={styles.commonBox}>
                    <p>常用分类</p>
                    <ul className={`${styles.common_search} ${styles.cl}`}>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556162658298_78_78.jpg"/>
                            <p>感冒发烧</p>
                        </li>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556162353847_78_78.jpg"/>
                            <p>清热解毒</p>
                        </li>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556162136151_78_78.jpg"/>
                            <p>咳嗽用药</p>
                        </li>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556162300107_78_78.jpg"/>
                            <p>皮肤用药</p>
                        </li>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556162343354_78_78.jpg"/>
                            <p>肠胃用药</p>
                        </li>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556162241299_78_78.jpg"/>
                            <p>性福生活</p>
                        </li>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556162313064_78_78.jpg"/>
                            <p>男科用药</p>
                        </li>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556162324278_78_78.jpg"/>
                            <p>妇科用药</p>
                        </li>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556185185194_78_78.jpg"/>
                            <p>滋补调养</p>
                        </li>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556161735470_78_78.jpg"/>
                            <p>维矿补益</p>
                        </li>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556185169764_78_78.jpg"/>
                            <p>医疗器械</p>
                        </li>
                        <li>
                            <img src="https://img.ddky.com/c/cms/temp/20190425/1556161774005_78_78.jpg"/>
                            <p>驱蚊避暑</p>
                        </li>

                    </ul>
                </div>

            </div>
        )
    }
}