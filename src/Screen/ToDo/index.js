import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ComponentButton from '../../component/Button/ComponentButton';
import Input from '../../component/Input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {todoAction, todoClearAction} from '../../Redux/reducer/common/action';

const mapStateToProps = (state) => {
  return {
    todo: state.common.todo,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      todoAction,
      todoClearAction,
    },
    dispatch,
  );

class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      subject: '',
      Sample: [],
    };
  }

  submit = () => {
    let arr = this.props.todo.length;

    let param = {
      id: arr,
      name: this.state.name,
      subject: this.state.subject,
    };
    this.props.todoAction(param);

    //          Without redux code
    //   let arr = this.state.Sample.length;
    // this.setState({
    //   Sample: [
    //     ...this.state.Sample,
    //     {id: arr, name: this.state.name, subject: this.state.subject},
    //   ],
    // });
    this.setState({name: '', subject: ''});
  };

  delete = (id) => {
    let deleteid = id['id'];
    console.log('delete', deleteid);
    // let param = {
    //   id: deleteid,
    //   // id=Object.values(deleteid)
    // };

    this.props.todoClearAction(deleteid);
    // console.log('param', param);
    // console.log('id', id);
    // const data = this.state.Sample.splice(id, 1);
    // this.setState({sample: data});
  };

  render() {
    console.log('action', this.props.todo);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1, backgroundColor: 'pink'}}>
          <View style={{marginVertical: '10%', alignItems: 'center'}}>
            <Input
              iconName="person-pin-circle"
              placeholder="Enter name"
              onChangeText={(text) => this.setState({name: text})}
              value={this.state.name}
            />
            <Input
              iconName="person-pin-circle"
              placeholder="Enter subject"
              onChangeText={(text) => this.setState({subject: text})}
              value={this.state.subject}
            />
            <ComponentButton label="submit" onPress={this.submit} />
          </View>

          <View style={{flex: 1}}>
            <FlatList
              numColumns={1}
              keyExtractor={(item) => item.id.toString()}
              data={this.props.todo}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => {
                console.log('item', item);
                return (
                  <View style={{flex: 1, marginHorizontal: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'space-evenly',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        marginVertical: 10,
                      }}>
                      <View
                        style={{flexDirection: 'column', marginVertical: 10}}>
                        <Text small bolder>
                          Name
                        </Text>
                        <Text small bolder>
                          Subject
                        </Text>
                      </View>
                      <View
                        style={{flexDirection: 'column', marginVertical: 10}}>
                        <Text small bolder>
                          :
                        </Text>
                        <Text small bolder>
                          :
                        </Text>
                      </View>
                      <View
                        style={{flexDirection: 'column', marginVertical: 10}}>
                        <Text small>{item.name}</Text>
                        <Text small>{item.subject}</Text>
                      </View>
                      <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=>this.delete(item)}>
                          <Icon name="delete" size={25} color="black" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
