import React, {Component} from 'react';
import {
  FlatList,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Contacts from 'react-native-contacts';


class Contact extends Component {
  constructor() {
    super();
    this.state = {
      contacts: null,
    };
  }

  async componentDidMount() {
    try {
      if (Platform.OS === 'ios') {
        Contacts.getAll((err, contact) => {
          if (err) {
            throw err;
          }
          this.setState({contacts});
        });
      } else if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
          },
        ).then(() => {
          Contacts.getAll((err, contacts) => {
            if (err === 'denied') {
              //error
            } else {
              this.setState({contacts});
            }
          });
        });
      }
    } catch (err) {
      console.log('err', err);
    }
  }


  render() {
    console.log('contact', this.state.contacts);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <FlatList
            data={this.state.contacts}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'pink',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>{item.givenName}</Text>
                {item.phoneNumbers.map((abc,index) => {
                  console.log('abc', abc.number);
                  return (
                    <View style={{flex: 1, backgroundColor: 'yellow'}}>
                      <Text>{abc.number}</Text>
                    </View>
                  );
                })}
              </View>
            )}
            numColumns={1}
            keyExtractor={(item, index) => item.rawContactId}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Contact;
