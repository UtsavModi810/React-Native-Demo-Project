import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Pressable,
  Modal,
  Image,
} from 'react-native';
import styles from './style';
import Tab from '../../component/Tab';
import {Transition, Transitioning} from 'react-native-reanimated';
import {images} from '../../utils/contstant';
import GridImage from './GridImage';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const {width} = Dimensions.get('window');

class TabBar extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 0,
      images: images,
      modalVisible: false,
      preview: '',
    };
    this.ref = React.createRef();
  }

  selectTab = (tabIndex) => {
    this.ref.current.animateNextTransition();
    this.setState({selectedTab: tabIndex});
  };

  previewImage = (image) => {
    console.log('image', image);
    this.setState({modalVisible: true, preview: image.uri});
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
    // if (!this.state.modalVisible)
    // return null
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
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.selectedTab == 0 ? (
            <View style={styles.imageContainer}>
              {this.state.images.map((image, index) => (
                <Pressable onPress={() => this.previewImage(image)}>
                  <GridImage
                    key={image.id}
                    image={image}
                    width={width / 2 - 20}
                  />
                </Pressable>
              ))}
            </View>
          ) : (
            <View style={styles.imageContainer}>
              {this.state.images.map((image, index) => (
                <Pressable onPress={() => this.previewImage(image)}>
                <GridImage
                  key={image.id}
                  image={image}
                  width={width / 3 - 20}
                />
                </Pressable>
              ))}
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
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() =>
            this.setState({modalVisible: !this.state.modalVisible})
          }> 
            <View
              style={{
                backgroundColor: '#000000aa',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <View style={styles.editAccount}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>PREVIEW IMAGE</Text>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          modalVisible: false
                        })
                      }>
                      <Icon
                        name="close"
                        size={25}
                        style={{alignSelf: 'center'}}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginVertical: 20}}>
                    {this.state.preview != '' && (
                      <Image
                        source={this.state.preview}
                        resizeMode="contain"
                        style={{
                          height: 200,
                          width: 300,
                        }}
                      />
                    )}
                  </View>
                </View>
            </View>
        </Modal>
      </Transitioning.View>
    );
  }
}

export default TabBar;
