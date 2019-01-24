'use strict';
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import BookCase from './../view/bookcase/bookcase';
import Circle from './../view/circle/circle';
import Comic from './../view/comic/comic';
import Fiction from './../view/fiction/fiction';
import Mine from './../view/mine/mine';
import { TabBarItem } from './../commons';

const TabNavigator = createBottomTabNavigator({
    // 书架
    BookCase: {
        screen: BookCase,
        navigationOptions: {
            tabBarLabel: '最新',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    focused={focused}
                    normalImage={require("./../images/js_resource_img_24x24navicon_bookshelf.png")}
                    selectedImage={require("./../images/js_resource_img_24x24navicon_bookshelf_a.png")}
                />
            )
        }
    },
    Fiction: {
        screen: Fiction,
        navigationOptions: {
            tabBarLabel: '专题',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    focused={focused}
                    normalImage={require("./../images/js_resource_img_24x24navicon_novel.png")}
                    selectedImage={require("./../images/js_resource_img_24x24navicon_novel_a.png")}
                />
            )
        }
    },
    Comic: {
        screen: Comic,
        navigationOptions: {
            tabBarLabel: '期刊',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    focused={focused}
                    normalImage={require("./../images/js_resource_img_24x24navicon_comic.png")}
                    selectedImage={require("./../images/js_resource_img_24x24navicon_comic_a.png")}
                />
            )
        }
    },
    // Circle: {
    //     screen: Circle,
    //     navigationOptions: {
    //         tabBarLabel: '元气圈',
    //         tabBarIcon: ({ focused, tintColor }) => (
    //             <TabBarItem
    //                 focused={focused}
    //                 normalImage={require("./../images/js_resource_img_24x24navicon_moments.png")}
    //                 selectedImage={require("./../images/js_resource_img_24x24navicon_moments_a.png")}
    //             />
    //         )
    //     }
    // },
    Mine: {
        screen: Mine,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    focused={focused}
                    normalImage={require("./../images/js_resource_img_24x24navicon_me.png")}
                    selectedImage={require("./../images/js_resource_img_24x24navicon_me_a.png")}
                />
            )
        }
    },
}, {
        animationEnabled: true, // 切换页面时是否有动画效果
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: true, // 是否可以左右滑动切换tab
        lazy: true,//是否根据需要懒惰呈现标签，而不是提前 
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        // 选项卡样式
        tabBarOptions: {
            // 文字和图片选中颜色
            activeTintColor: '#78affe',
            // 文字和图片默认颜色
            inactiveTintColor: '#000000',
            // android5.0涟漪效果
            pressColor: 'material',
            // TabBar 背景色
            style: {
                paddingBottom: 0,
                borderTopWidth: 1,
                height:60,
                borderTopColor: '#d6d6d6',
                backgroundColor: '#FFFFFF',
            },
            // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {
                height: 66,
            },
            labelStyle: {
                fontSize: 15,
                marginTop: 0,
                marginBottom: 12,
            },
            iconStyle: {
                height: 32,
            }
        },

    })


const App = createAppContainer(TabNavigator);

export default App;