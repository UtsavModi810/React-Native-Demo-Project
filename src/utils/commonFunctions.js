import Snackbar from 'react-native-snackbar';
import { Color } from './color';
import { CommonActions } from '@react-navigation/routers';

export const notifyMsg = ({ message, success = true }) => {
    setTimeout(() => {
        Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT,
            textColor: Color.WHITE,
            backgroundColor: success ? Color.GREEN : Color.ERROR,
        });
    }, 200);
};

export const goto = (navigation, rout, param = {}) => {
    navigation.navigate(rout, {
       param
    });
};

export const goBack = (navigation) => {
    navigation.goBack();
};

export const resetNavigation = (navigation, rout) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: rout }],
        }),
    );
};