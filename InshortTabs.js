import React, { useState } from "react";
import { View, Text, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import DiscoverScreen from "./screens/DiscoverScreen";
import NewsScreen from "./screens/NewsScreen";
import TopNavigation from "./TopNavigation";
import {PagerView} from 'react-native-pager-view';

const InshortTabs = () => {
const layout = useWindowDimensions();
const [index, setIndex] = useState(1);

const [routes] = useState([
    {key:'first',title:'Discover'},
    {key:'second',title:'News'},
]);

const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen
})

    return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index } setIndex={setIndex}/>}
    />
    
    );

}


export default InshortTabs;
