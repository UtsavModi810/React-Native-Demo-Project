import { StyleSheet } from "react-native";
import { Color } from "./color";
import ThemeUtils from "./themeUtils";

const style = StyleSheet.create({
    nointernetMessage: {
        justifyContent: 'center',
        height: ThemeUtils.relativeHeight(5),
        width: '100%',
        backgroundColor: Color.PRIMARY,
        alignItems: 'center',
    },
    nointernetText: {
        color: Color.WHITE,
        fontSize: ThemeUtils.responsiveFontSize(11)
    },
    screenOverlay: {
        flex: 1,
    }
});

export default style;