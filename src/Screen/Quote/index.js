import React, {Component} from 'react';
import {
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ComponentButton from '../../component/Button/ComponentButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {quoteAction} from '../../Redux/reducer/common/action';
import Tts from 'react-native-tts';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

Tts.setDefaultLanguage('en-US');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
Tts.setDefaultRate(0.5);
Tts.setDefaultPitch(1.2);

const mapStateToProps = (state) => {
  console.log('state', state.common);
  return {
    home: state.common,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      quoteAction,
    },
    dispatch,
  );

class Quote extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      speaking: false,
    };
  }

  onSubmit = () => {
    this.props.quoteAction;
  };

  speakNow = () => {
    Tts.stop();
    Tts.speak(
      this.props.home.quote.content +
        'Author by' +
        this.props.home.quote.author,
    );
    Tts.addEventListener('tts-start', (event) =>
      this.setState({speaking: true}),
    );
    Tts.addEventListener('tts-finish', (event) =>
      this.setState({speaking: false}),
    );
  };

  copyToClipboard = () => {
    let value = JSON.stringify(this.props.home.quote.content);
    console.log('value', value);
    Clipboard.setString(value);
    Snackbar.show({
      text: 'Quote copied!',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'white',
      textColor: 'pink',
    });
  };

  tweet = () => {
    let twitterParameters = [];
    if (this.props.home.quote.content)
      twitterParameters.push(
        'text=' +
          encodeURI(
            this.props.home.quote.content +
              '\nAuthor Name - ' +
              this.props.home.quote.author,
          ),
      );
    const url =
      'https://twitter.com/intent/tweet?' + twitterParameters.join('&');
    Linking.openURL(url)
      .then((data) => {
        alert('Twitter Opened');
      })
      .catch(() => {
        alert('Something went wrong');
      });
  };

  render() {
    console.log('quote', this.props.home.quote.content);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              borderRadius: 50 / 2,
            }}>
            <View
              style={{
                marginVertical: '5%',
                marginHorizontal: '10%',
              }}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                  Quote of the Day
                </Text>
              </View>

              <View style={{marginVertical: '5%'}}>
                <View style={{alignSelf: 'flex-start'}}>
                  <Icon name="quote-left" size={20} />
                </View>
                <View style={{marginHorizontal: '7%'}}>
                  <Text
                    style={{
                      letterSpacing: 1.1,
                      color: 'black',
                      textAlign: 'justify',
                      marginHorizontal: '2%',
                    }}>
                    {this.props.home.quote.content != undefined
                      ? this.props.home.quote.content
                      : 'The greatest part of our happiness depends on our dispositions, not our circumstances'}
                  </Text>
                </View>
                <View style={{alignSelf: 'flex-end'}}>
                  <Icon name="quote-right" size={20} />
                </View>
              </View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text>---- {this.props.home.quote.author!=undefined?this.props.home.quote.author:'Martha Washington'}</Text>
              </View>
              <View style={{marginVertical: '5%', alignItems: 'center'}}>
                <ComponentButton
                  label="New Quote"
                  onPress={this.props.quoteAction}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: '5%',
                }}>
                <TouchableOpacity
                  onPress={this.speakNow}
                  style={{
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 50,
                    borderColor: 'pink',
                    backgroundColor: this.state.speaking ? 'pink' : 'white',
                  }}>
                  <Icon
                    name="volume-up"
                    size={30}
                    color={this.state.speaking ? 'white' : 'pink'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.copyToClipboard}
                  style={{
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 50,
                    borderColor: 'pink',
                  }}>
                  <Icon name="copy" size={30} color="pink" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.tweet}
                  style={{
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 50,
                    borderColor: 'pink',
                  }}>
                  <Icon name="twitter" size={30} color="pink" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
