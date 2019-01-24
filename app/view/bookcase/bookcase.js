import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Toptitle from './../../components/Toptitle';
 import Dimensions from 'Dimensions'
 const screenWidth = Dimensions.get('window').width
 
export default class Bookcase extends React.Component {
 
  constructor(props) {

    super(props);
      this.state = {
          title:"最新",
          sections : [
          { data: [
            {
              "_id": 921271998209849,
              "thumb": "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg",
              "video": "http://v.youku.com/4105b244-75a4-41a7-a372-eee29d45a546",
              "title": "樱花飘雪",
              "con": "樱花，起源于中国。据日本权威著作《樱大鉴》记载，樱花原产于喜马拉雅山脉。被人工栽培后，这一物种逐步传入中国长江流域、中国西南地区以及台湾岛。秦汉时期，宫廷皇族就已种植樱花，距今已有2000多年的栽培历史。汉唐时期，已普遍栽种在私家花园中，至盛唐时期，从宫苑廊庑到民舍田间，随处可见绚烂绽放的樱花，烘托出一个盛世华夏的伟岸身影。当时万国来朝，日本深慕中华文化之璀璨以及樱花的种植和鉴赏，樱花随着建筑、服饰、茶道、剑道等一并被日本朝拜者带回了东瀛。"
            },
            {
              "_id": 803933433198357,
              "thumb": "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg",
              "video": "http://v.youku.com/4105b244-75a4-41a7-a372-eee29d45a546",
              "title": "樱花飘雪",
              "con": "樱花，起源于中国。据日本权威著作《樱大鉴》记载，樱花原产于喜马拉雅山脉。被人工栽培后，这一物种逐步传入中国长江流域、中国西南地区以及台湾岛。秦汉时期，宫廷皇族就已种植樱花，距今已有2000多年的栽培历史。汉唐时期，已普遍栽种在私家花园中，至盛唐时期，从宫苑廊庑到民舍田间，随处可见绚烂绽放的樱花，烘托出一个盛世华夏的伟岸身影。当时万国来朝，日本深慕中华文化之璀璨以及樱花的种植和鉴赏，樱花随着建筑、服饰、茶道、剑道等一并被日本朝拜者带回了东瀛。"
            },
            {
              "_id": 972685833537697,
              "thumb": "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg",
              "video": "http://v.youku.com/4105b244-75a4-41a7-a372-eee29d45a546",
              "title": "樱花飘雪",
              "con": "樱花，起源于中国。据日本权威著作《樱大鉴》记载，樱花原产于喜马拉雅山脉。被人工栽培后，这一物种逐步传入中国长江流域、中国西南地区以及台湾岛。秦汉时期，宫廷皇族就已种植樱花，距今已有2000多年的栽培历史。汉唐时期，已普遍栽种在私家花园中，至盛唐时期，从宫苑廊庑到民舍田间，随处可见绚烂绽放的樱花，烘托出一个盛世华夏的伟岸身影。当时万国来朝，日本深慕中华文化之璀璨以及樱花的种植和鉴赏，樱花随着建筑、服饰、茶道、剑道等一并被日本朝拜者带回了东瀛。"
            },
            {
              "_id": 388949609679624,
              "thumb": "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg",
              "video": "http://v.youku.com/4105b244-75a4-41a7-a372-eee29d45a546",
              "title": "樱花飘雪",
              "con": "樱花，起源于中国。据日本权威著作《樱大鉴》记载，樱花原产于喜马拉雅山脉。被人工栽培后，这一物种逐步传入中国长江流域、中国西南地区以及台湾岛。秦汉时期，宫廷皇族就已种植樱花，距今已有2000多年的栽培历史。汉唐时期，已普遍栽种在私家花园中，至盛唐时期，从宫苑廊庑到民舍田间，随处可见绚烂绽放的樱花，烘托出一个盛世华夏的伟岸身影。当时万国来朝，日本深慕中华文化之璀璨以及樱花的种植和鉴赏，樱花随着建筑、服饰、茶道、剑道等一并被日本朝拜者带回了东瀛。"
            },
            {
              "_id": 540398016970069,
              "thumb": "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg",
              "video": "http://v.youku.com/4105b244-75a4-41a7-a372-eee29d45a546",
              "title": "樱花飘雪",
              "con": "樱花，起源于中国。据日本权威著作《樱大鉴》记载，樱花原产于喜马拉雅山脉。被人工栽培后，这一物种逐步传入中国长江流域、中国西南地区以及台湾岛。秦汉时期，宫廷皇族就已种植樱花，距今已有2000多年的栽培历史。汉唐时期，已普遍栽种在私家花园中，至盛唐时期，从宫苑廊庑到民舍田间，随处可见绚烂绽放的樱花，烘托出一个盛世华夏的伟岸身影。当时万国来朝，日本深慕中华文化之璀璨以及樱花的种植和鉴赏，樱花随着建筑、服饰、茶道、剑道等一并被日本朝拜者带回了东瀛。"
            },
            {
              "_id": 235259631659063,
              "thumb": "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg",
              "video": "http://v.youku.com/4105b244-75a4-41a7-a372-eee29d45a546",
              "title": "樱花飘雪",
              "con": "樱花，起源于中国。据日本权威著作《樱大鉴》记载，樱花原产于喜马拉雅山脉。被人工栽培后，这一物种逐步传入中国长江流域、中国西南地区以及台湾岛。秦汉时期，宫廷皇族就已种植樱花，距今已有2000多年的栽培历史。汉唐时期，已普遍栽种在私家花园中，至盛唐时期，从宫苑廊庑到民舍田间，随处可见绚烂绽放的樱花，烘托出一个盛世华夏的伟岸身影。当时万国来朝，日本深慕中华文化之璀璨以及樱花的种植和鉴赏，樱花随着建筑、服饰、茶道、剑道等一并被日本朝拜者带回了东瀛。"
            },
            {
              "_id": 742809166586388,
              "thumb": "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg",
              "video": "http://v.youku.com/4105b244-75a4-41a7-a372-eee29d45a546",
              "title": "樱花飘雪",
              "con": "樱花，起源于中国。据日本权威著作《樱大鉴》记载，樱花原产于喜马拉雅山脉。被人工栽培后，这一物种逐步传入中国长江流域、中国西南地区以及台湾岛。秦汉时期，宫廷皇族就已种植樱花，距今已有2000多年的栽培历史。汉唐时期，已普遍栽种在私家花园中，至盛唐时期，从宫苑廊庑到民舍田间，随处可见绚烂绽放的樱花，烘托出一个盛世华夏的伟岸身影。当时万国来朝，日本深慕中华文化之璀璨以及樱花的种植和鉴赏，樱花随着建筑、服饰、茶道、剑道等一并被日本朝拜者带回了东瀛。"
            },
            {
              "_id": 444823569310741,
              "thumb": "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg",
              "video": "http://v.youku.com/4105b244-75a4-41a7-a372-eee29d45a546",
              "title": "樱花飘雪",
              "con": "樱花，起源于中国。据日本权威著作《樱大鉴》记载，樱花原产于喜马拉雅山脉。被人工栽培后，这一物种逐步传入中国长江流域、中国西南地区以及台湾岛。秦汉时期，宫廷皇族就已种植樱花，距今已有2000多年的栽培历史。汉唐时期，已普遍栽种在私家花园中，至盛唐时期，从宫苑廊庑到民舍田间，随处可见绚烂绽放的樱花，烘托出一个盛世华夏的伟岸身影。当时万国来朝，日本深慕中华文化之璀璨以及樱花的种植和鉴赏，樱花随着建筑、服饰、茶道、剑道等一并被日本朝拜者带回了东瀛。"
            },
            {
              "_id": 822113648639406,
              "thumb": "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg",
              "video": "http://v.youku.com/4105b244-75a4-41a7-a372-eee29d45a546",
              "title": "樱花飘雪",
              "con": "樱花，起源于中国。据日本权威著作《樱大鉴》记载，樱花原产于喜马拉雅山脉。被人工栽培后，这一物种逐步传入中国长江流域、中国西南地区以及台湾岛。秦汉时期，宫廷皇族就已种植樱花，距今已有2000多年的栽培历史。汉唐时期，已普遍栽种在私家花园中，至盛唐时期，从宫苑廊庑到民舍田间，随处可见绚烂绽放的樱花，烘托出一个盛世华夏的伟岸身影。当时万国来朝，日本深慕中华文化之璀璨以及樱花的种植和鉴赏，樱花随着建筑、服饰、茶道、剑道等一并被日本朝拜者带回了东瀛。"
            },
            {
              "_id": 862266243799710,
              "thumb": "http://www.pptbz.com/pptpic/UploadFiles_6909/201211/2012111719294197.jpg",
              "video": "http://v.youku.com/4105b244-75a4-41a7-a372-eee29d45a546",
              "title": "樱花飘雪",
              "con": "樱花，起源于中国。据日本权威著作《樱大鉴》记载，樱花原产于喜马拉雅山脉。被人工栽培后，这一物种逐步传入中国长江流域、中国西南地区以及台湾岛。秦汉时期，宫廷皇族就已种植樱花，距今已有2000多年的栽培历史。汉唐时期，已普遍栽种在私家花园中，至盛唐时期，从宫苑廊庑到民舍田间，随处可见绚烂绽放的樱花，烘托出一个盛世华夏的伟岸身影。当时万国来朝，日本深慕中华文化之璀璨以及樱花的种植和鉴赏，樱花随着建筑、服饰、茶道、剑道等一并被日本朝拜者带回了东瀛。"
            }
            ]
          },
        ]
      }
var sections=this.state.sections
          console.log(111111111111111111)
          console.log("sections",sections.length)

          let data = Object.assign({}, this.state.sections, { data: 1111 })
          this.setState({
            sections: data,     //data是一个对象数组
          });
          console.log(this.state.sections);

      fetch('http://rap2api.taobao.org/app/mock/124959/example/1548052206850')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);

          
        })
        .catch((error) => {
          console.error(error);
      });
  }
 
  _renderItem = (info) => {


    var txt = info.item._id;
    var thumb = info.item.thumb;
    var title = info.item.title;
    var con = info.item.con;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        >
        <View style={{backgroundColor: '#ffffff', padding: 10, flexDirection: 'row'}}>

          <Image source={{uri: thumb}} style={styles.imgStyle}/>

          <View style={{flex: 1}}>

            <Text style={{
              marginLeft: 10,
              width: screenWidth * 0.65,
              height: 25 * 0.7,
              fontSize:14,
              color:'#222'
            }}>{title}</Text>

            <View style={{paddingLeft: 10, paddingRight: 10}}>
              <Text numberOfLines={4} style={styles.subTitle}>{con}</Text>
            </View>
          </View>

        </View>

      </TouchableOpacity>
    )
  }
 
  render() {
    var sections=this.state.sections
    return (
      <View style={{ flex: 1 }}>
        <Toptitle title={this.state.title}/>
        <SectionList
          renderItem={this._renderItem}
          sections={sections}
          refreshing={false}
          onRefresh={()=>{alert("刷新")}}
          onEndReachedThreshold={0.1}
          onEndReached={(info)=>{alert("到达底部")}}
          ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'#ddd'}}></View>}
        />
      </View>
    );
  }
 
}
const styles = StyleSheet.create({
  FlatList:{
    // position:'relative',
    flex:1,
    // marginTop:-450

  },
  ScrollableTabView:{
    // height:250,
    // backgroundColor:'red',
    // flex:1,
  },
  text: {
    marginTop: 10
  },
  subTitle: {
    marginTop: 3,
    color: '#666666',
    fontSize: 12,
    flex: 1,
  },
  imgStyle: {
    width: screenWidth * 0.3,
    height: 80
  }
})