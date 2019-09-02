
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import React, {Component} from 'react';
import {FlatList, ActivityIndicator, Text, View,} from 'react-native';




export default class MenuTest extends Component{

   render() {
       return (
           <View>
           <Menu
                ref={this.setMenuRef}
                button={<Text onPress={this.showMenu}>Show menu</Text>}
            >
                <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                <MenuItem onPress={this.hideMenu} disabled>
                    Menu item 3
                </MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
            </Menu>
               </View>

        );
    }
}
