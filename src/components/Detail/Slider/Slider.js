import React from 'react'

import { Carousel } from 'antd';

import styles from '../../../routes/Detail/Detail.css'
import axios from 'axios'

class Slider extends React.Component{
    renderSlider(){

    }
    componentDidMount(){
        console.log(this)
    }
    render(){
        return(
            <div id={styles.slider}>
                <Carousel autoplay className={styles.swiper_wrapper}> 
                    <div>
                        <img alt="" src="https://imgq.ddky.com/c/product/500616/big/s_1.jpg?t=1529608922495&amp;watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F800x800%21%2Fquality%2F100" />
                    </div>
                    <div>
                        <img alt="" src="https://imgq.ddky.com/c/product/500616/big/n_1.jpg?t=1517975517156&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F800x800%21%2Fquality%2F100" />
                    </div>
                    <div>
                        <img alt="" src="https://imgq.ddky.com/c/product/500616/big/s_1.jpg?t=1529608922495&amp;watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F800x800%21%2Fquality%2F100" />
                    </div>
                    <div>
                        <img alt="" src="https://imgq.ddky.com/c/product/500616/big/s_1.jpg?t=1529608922495&amp;watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F800x800%21%2Fquality%2F100" />
                    </div>
                </Carousel>
            </div>
        )
    }
}


export default Slider