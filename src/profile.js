import React, { useState, useEffect } from "react";

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Alert,
    FlatList,
    ActivityIndicator, Image,
} from "react-native";
import { SvgLeftArrow, SvgPoints } from "../assets/svgIcons";
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from "expo-location";


const Days = ({navigation, route}) => {
    const { weather, forecast } = route.params;


    const customIcons = {
        '01d': require('../assets/svgIcons/Sun.png'),
        '02d': require('../assets/svgIcons/SunClouds.png'),
        '03d': require('../assets/svgIcons/clouds.png'),
        '04d': require('../assets/svgIcons/clouds.png'),
        '09d': require('../assets/svgIcons/rain.png'),
        '10d': require('../assets/svgIcons/rainsun.png'),
        '11d': require('../assets/svgIcons/Thunder.png'),
        '13d': require('../assets/svgIcons/snow.png'),
        '50d': require('../assets/svgIcons/fog.png'),
        '01n': require('../assets/svgIcons/Moon.png'),
        '02n': require('../assets/svgIcons/Mooncloud.png'),
        '03n': require('../assets/svgIcons/clouds.png'),
        '04n': require('../assets/svgIcons/clouds.png'),
        '09n': require('../assets/svgIcons/rain.png'),
        '10n': require('../assets/svgIcons/moonrain.png'),
        '11n': require('../assets/svgIcons/Thunder.png'),
        '13n': require('../assets/svgIcons/snow.png'),
        '50n': require('../assets/svgIcons/fog.png'),
    };

    const renderItem = ({ item, index }) => {
        let date = new Date();
        date.setDate(date.getDate() + index + 2);
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayOfMonth = date.getDate();
        const month = monthsOfYear[date.getMonth()];
        const days = daysOfWeek[date.getDay()];
        const hour = date.getHours();
        const temp = item.main.temp;

        return (
            <View style={styles.renderWrapper}>
                <View style={styles.dailyTextWrapper}>
                    <Text style={styles.dailyTextDays}>{days}</Text>
                    <Text style={styles.dailyTextMonth}>{month}, {dayOfMonth}</Text>
                </View>

                <View style={styles.tempWrapper}>
                    <Text style={styles.textHourlyTemp}>{Math.round(temp)}</Text>
                    <Text style={styles.degreeHourly}>°</Text>
                </View>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.renderDailyImage}
                        source={customIcons[item.weather[0].icon]}
                    />
                </View>

            </View>
        );
    };

// console.log(weather);
console.log(forecast[8]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
                    <Text><SvgLeftArrow /></Text>
                </TouchableOpacity>
                <Text style={styles.titleText}>Next 7 days</Text>
                <SvgPoints />
            </View>

            <LinearGradient
                colors={['#482FE9', '#9747FF', '#FFED8D']}
                style = {styles.gradient}
                start={[0.2, 0.2]}
                end={[0, 0.8]}>
                <View style={styles.tomorrowWrapper}>
                    <Image
                        style={styles.tomorrowImage}
                        source={customIcons[forecast[8].weather[0].icon]}
                    />
                    <View>
                        <Text style={styles.tomorrowText}>Tomorrow</Text>
                        <Text style={styles.tomorrowDescr}>{forecast[8].weather[0].description}</Text>
                    </View>
                </View>
                <View style={styles.tomorrowTempWrapper}>
                    <View style={{position: 'relative'}}>
                        <Text style={styles.tomorrowTempMax}>{Math.round(forecast[8].main.temp_max)+1}</Text>
                        <Text style={styles.degreeTomorrowMax}>°</Text>
                    </View>
                    <View style={{position: 'relative'}}>
                        <Text style={styles.tomorrowTempMin}>/ {Math.round(forecast[8].main.temp_min)-1}</Text>
                        <Text style={styles.degreeTomorrowMin}>°</Text>
                    </View>

                </View>

            </LinearGradient>
            <View style={styles.dailyContainer}>
                <FlatList
                    data={forecast.slice(0, 8)}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt.toString()}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    vertical={false}
                />
            </View>
        </SafeAreaView>

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
    container: {
        backgroundColor: '#151638',
        height: '100%',
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        alignItems: 'center',
        maxHeight: 65,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 500,
        color: '#FFFFFF',
    },
    gradient: {
        flex: 1,
        maxHeight: 290,
        marginHorizontal: 24,
        borderRadius: 20,
    },
    tomorrowWrapper: {
        flex: 1,
        maxHeight: 130,
        marginHorizontal: 14,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tomorrowImage: {
        width: 180,
        height: 180,
    },
    tomorrowText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#fff',
      opacity: .5,
    },
    tomorrowDescr: {
        fontSize: 18,
        color: '#fff',
        lineHeight: 24,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    tomorrowTempWrapper: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 100,
        alignItems: 'space-between',
        justifyContent: 'center',
        gap: 15,
    },
    tomorrowTempMax: {
        position: 'relative',
        fontSize: 96,
        fontWeight: 'bold',
        color: '#D9D9D9',
    },
    tomorrowTempMin: {
        position: 'relative',
      fontSize: 36,
      fontWeight: 'bold',
      color: '#D9D9D9',
    },
    degreeTomorrowMax: {
        position: 'absolute',
        fontSize: 46,
        color: '#D9D9D9',
        right: -10,
     },
    degreeTomorrowMin: {
        position: 'absolute',
        fontSize: 26,
        color: '#D9D9D9',
        right: -5,
        top: -5,
    },
    dailyContainer: {
        flex: 1,
        marginHorizontal: 15,
    },
    renderWrapper: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1A1B3F',
        margin: 5,
        borderRadius: 15,
    },
    dailyTextWrapper: {
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dailyTextDays: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
        lineHeight: 21,
    },
    dailyTextMonth: {
        fontSize: 12,
        fontWeight: 'bold',
        opacity: 0.5,
        color: '#FFFFFF',
    },
    tempWrapper: {
        position: 'relative',
        alignItems: 'center',
    },
    textHourlyTemp: {
        fontWeight: 500,
        fontSize: 36,
        color: '#fff',
        marginTop: 10,
    },
    degreeHourly: {
        position: 'absolute',
        fontSize: 16,
        color: '#D9D9D9',
        top: 5,
        right: -5,
    },
    imageWrapper: {
      width: '33%',
        alignItems: 'center',
    },
    renderDailyImage: {
      width: 60,
      height: 60,
    },
});