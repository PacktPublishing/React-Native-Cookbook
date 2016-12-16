import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  TouchableOpacity
} from 'react-native';

// const Toolbar = ({items}) => (
//     <View style={{flex:1, flexDirection:'row', marginTop : 24}}>
//         {items.map(function (item, idx) {
//             return (
//                 <TouchableOpacity key={idx}>
//                     <View style={{padding: 20}}>
//                         <Text>{item.title}</Text>
//                     </View>
//                 </TouchableOpacity>
//             )
//         })}
//     </View>
// );
// export default Toolbar;
export default class Toolbar extends Component {
    componentWillMount () {
        this.setState({
            selectedTab : this.props.items[0].id
        });
    }
    setTab = (selectedTab) => {
        this.setState({
            selectedTab 
        });
    }
    render() {
        const {
            state,
            props
        } = this;
        var me = this;
        
        return (<TabBarIOS
            tintColor="white"
            barTintColor="darkslateblue">
            {props.items.map(function (item) {
                return (
                    <TabBarIOS.Item
                        key={item.id}
                        systemIcon={item.type}
                        selected={state.selectedTab === item.id}
                        onPress={()=>me.setTab(item.id)}>
                        <View style={styles.tabContent}>
                            <Text>{item.title}</Text>
                        </View>
                    </TabBarIOS.Item>)
            })}
        </TabBarIOS>);
    }
}
const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center'
  },
  tabText: {
    color: 'white',
    margin: 50,
  }
});
