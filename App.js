import {createStackNavigator,} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screen/SearchScreen';
import ResultsShowscreen from './src/screen/ResultsShowscreen';

const navigator=createStackNavigator({
   Search:SearchScreen,
   ResultsShow:ResultsShowscreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
});

export default createAppContainer(navigator);

