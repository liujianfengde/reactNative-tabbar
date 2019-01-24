'use strict';
import React, { Component } from 'react';
import { Image, View } from 'react-native';

class TabBarItem extends Component {
    render() {
        return (
            <View>
                <Image source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
                    style={{ width: 24, height: 24, marginTop: 6, }}
                />
            </View>
        )
    }
}

export default TabBarItem;