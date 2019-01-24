'use strict';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

class NavigatorBar extends Component {
    static propTypes = {
        title: PropTypes.string, // nav标题
        titleTextColor: PropTypes.string, // nav标题颜色  
        isHide: PropTypes.bool,//是否隐藏  
        leftButton: PropTypes.element, //右侧按钮
        rightButton: PropTypes.element, //左侧按钮
    };

    static defaultProps = {
        title: '',
        titleTextColor: '#000000',
        isHide: false,//是否隐藏导航栏
        hide: false,//是否隐藏状态栏
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
});

export default NavigatorBar;

