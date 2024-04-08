import React from "react";

import {
    StyleSheet,
    Text,
    View,
} from "react-native";




const Days = () => {

    return (
       <View style={styles.loading}>
           <Text>Hello World</Text>
       </View>
    );
};

export default Days;

const styles = StyleSheet.create({
    loading: {
        backgroundColor: '#151638',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});