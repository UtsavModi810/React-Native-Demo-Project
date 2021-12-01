import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Dimensions, TouchableWithoutFeedback} from 'react-native';
import styles from './style';
import Tab from '../../component/Tab';
import {Transition, Transitioning} from 'react-native-reanimated';
import {images} from '../../utils/contstant';
import GridImage from './GridImage';


const {width} = Dimensions.get('window');

class TabBar extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 0,
      images: images,
    };
    this.ref = React.createRef();
  }

  selectTab = (tabIndex) => {
    this.ref.current.animateNextTransition();
    this.setState({selectedTab: tabIndex});
  };

  transition = (
    <Transition.Together>
      <Transition.In
        type="slide-right"
        durationMs={2000}
        interpolation="easeInOut"
      />
      <Transition.In type="fade" durationMs={2000} />
      <Transition.Change />
      <Transition.Out type="fade" durationMs={2000} />
    </Transition.Together>
  );

  componentDidMount = () => {
    this.ref.current.animateNextTransition();
  };

  randomizeImages = () => {
    const shuffledImages = images.sort(() => 0.5 - Math.random());

    this.ref.current.animateNextTransition();
    this.setState({images: shuffledImages});
  };

  deleteImages = (images) => {
    images.pop();

    this.ref.current.animateNextTransition();
    this.setState({images: images});
  };

  render() {
    return (
      <Transitioning.View
        style={styles.container}
        ref={this.ref}
        transition={this.transition}>
        <View style={styles.tabcontainer}>
          <View
            style={{
              position: 'absolute',
              height: 70,
              width: (width - 30) / 2,
              backgroundColor: '#BADA55',
              left: this.state.selectedTab == 0 ? 0 : null,
              right: this.state.selectedTab == 1 ? 0 : null,
            }}
          />

          <TouchableOpacity onPress={() => this.selectTab(0)} style={{flex: 1}}>
            <Tab
              icon="image-outline"
              isSelected={this.state.selectedTab == 0 ? true : false}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectTab(1)} style={{flex: 1}}>
            <Tab
              icon="images-outline"
              isSelected={this.state.selectedTab == 1 ? true : false}
            />
          </TouchableOpacity>
        </View>
        {this.state.selectedTab == 0 ? (
          <View style={styles.imageContainer}>
            {this.state.images.map((image, index) => (
              <GridImage key={image.id} image={image} width={width / 2 - 20} />
            ))}
          </View>
        ) : (
          <View style={styles.imageContainer}>
            {this.state.images.map((image, index) => (
              <GridImage key={image.id} image={image} width={width / 4 - 20} />
            ))}
          </View>
        )}
        {this.state.selectedTab == 0 && (
          <View
            style={{
              marginBottom: 80,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Images</Text>
          </View>
        )}
        <TouchableWithoutFeedback
          onPress={() => {
            this.deleteImages(this.state.images);
          }}>
          <View
            style={{
              height: 70,
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: this.state.selectedTab == 0 ? -70 : 0,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 24, color: 'white'}}>Delete Images</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.randomizeImages(this.state.images);
          }}>
          <View
            style={{
              height: 70,
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: this.state.selectedTab == 0 ? 0 : -70,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 24, color: 'white'}}>Randomize Text</Text>
          </View>
        </TouchableWithoutFeedback>
      </Transitioning.View>
    );
  }
}

export default TabBar;
