import React, {useEffect, useState} from "react";
import * as Location from "expo-location";
// import HomeStack from './profile';
import {
    ActivityIndicator,
    Alert,
    Image,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {SvgVector} from '../assets/svgIcons';

const API_KEY = '78c6a0323547114905fa668a47e34a94';
        const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
        const FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

        const Weather = ({navigation}) => {
            const [weather, setWeather] = useState(null);
            const [refreshing, setRefreshing] = useState(false);
            const [currentDate, setCurrentDate] = useState('');
            const [forecast, setForecast] = useState([]);

            const loadWeather = async () => {
                setRefreshing(true);

                try {
                    const { status } = await Location.requestForegroundPermissionsAsync();

                    if (status !== 'granted') {
                        Alert.alert('Permission to access location was denied');
                        return;
                    }

                    const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
                    const { latitude, longitude } = location.coords;

                    const url = `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
                    const response = await fetch(url);

                    if (!response.ok) {
                        Alert.alert('Error fetching weather data');
                        return;
                    }

                    // const data = await response.json();
                    // setWeather(data);
                    const { weather, main, name } = await response.json();
                    setWeather({ weather, main, name });

                    const forecastUrl = `${FORECAST_API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
                    const forecastResponse = await fetch(forecastUrl);

                    if (!forecastResponse.ok) {
                        Alert.alert('Error fetching forecast data on application');
                        return;
                    }

                    const { list } = await forecastResponse.json();
                    setForecast(list);

                } catch (error) {
                    Alert.alert('Error fetching weather data');
                }

                setRefreshing(false);
            };

            useEffect(() => {
                loadWeather();
                const date = new Date();
                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                const dayOfWeek = daysOfWeek[date.getDay()];
                const dayOfMonth = date.getDate();
                const month = monthsOfYear[date.getMonth()];
                setCurrentDate(`${dayOfWeek}, ${dayOfMonth} ${month}`);
            }, []);

    if (!weather) {
        return (
            <SafeAreaView style={styles.loading}>
                <ActivityIndicator size="large" />
            </SafeAreaView>
        );
    }

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



    const renderItem = ({ item }) => {
        const date = new Date(item.dt * 1000);

        const hour = date.getHours();
        const temp = item.main.temp;
        return (
            <View style={styles.hourlyWrapper}>
                <Image source={customIcons[item.weather[0].icon]} style={styles.hourlyIcon} />
                <Text style={styles.textHour}>{hour}:00</Text>
                <View style={{position: 'relative'}}>
                    <Text style={styles.textHourlyTemp}>{Math.round(temp)}</Text>
                    <Text style={styles.degreeHourly}>°</Text>
                </View>

            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/*<View style={styles.title}>*/}
                <View style={styles.titleWrapper}>
                    <SvgVector />
                    <Text style={styles.titleText}>{weather.name}</Text>
                </View>
                <View style={styles.test}>
                    <View style={styles.dataTime}>
                        <Text style={styles.dataText}>
                            {currentDate}
                        </Text>
                    </View>
                    <LinearGradient
                        colors={['#482FE9', '#9747FF', '#FFED8D']}
                        style = {styles.gradient}
                        start={[0.2, 0.2]}
                        end={[0, 0.8]}>
                        <Text style={styles.forecast}>
                            {weather.weather[0].description}
                        </Text>
                        <View style={{position: 'relative'}}>
                            <Text style={styles.temp}>
                                {Math.round(weather.main.temp)}
                            </Text>
                            <Text style={styles.degree}>°</Text>

                        </View>

                    </LinearGradient>
                    <View style={styles.mainIcon}>
                        <Image
                            style={styles.icon}
                            source={customIcons[weather.weather[0].icon]}
                        />
                    </View>
                </View>

                <View>
                    <LinearGradient
                        colors={['#7B61FF66', '#131331']}
                        style = {styles.gradientBottom}
                        start={[0, 1]}
                        end={[1, 0]}>
                        <View style={styles.footerTitle}>
                            <Text style={styles.footerTitleText}>Today</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile', {weather, forecast})}>
                                <Text style={styles.footerTitleText}>Next 7 days  ❯</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.hourlyWeatherBlock}>
                            <FlatList
                                data={forecast.slice(0, 8)}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.dt.toString()}
                                horizontal={true}
                                style={styles.hourlyWeather}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                vertical={false}
                            />
                        </View>

                    </LinearGradient>
                </View>


        </SafeAreaView>
    );
};

export default Weather;


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
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop: 15,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 500,
        color: '#FFFFFF',
    },
    gradient: {
        display: 'flex',
        width: 250,
        height: 250,
        borderRadius: 50,
        alignItems: 'center',
    },
    test: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 120,
    },
    forecast: {
      fontSize: 16,
      fontWeight: 500,
      color: '#FFFFFF',
      paddingTop: 35,
      textTransform: 'capitalize',
    },
    temp: {
      fontSize: 128,
      fontWeight: 500,
      color: '#D9D9D9',
    },
    degree: {
        position: 'absolute',
        fontSize: 40,
        color: '#D9D9D9',
        top: 20,
        right: -10,
    },
    dataTime: {
      backgroundColor: '#D9D9D9',
      width: 125,
      height: 35,
      borderRadius: 30,
      top: 17,
      zIndex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dataText: {
        color: '#000',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    },
    mainIcon: {
        position: 'relative',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 140,
        height: 120,
        aspectRatio: 1,
        position: 'absolute',
        opacity: 1,
    },
    gradientBottom: {
        marginTop: 100,
        display: 'flex',
        width: '100%',
        height: 310,
        borderRadius: 30,
        alignItems: 'center',
    },
    footerTitle: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        gap: 150,
        maxHeight: 20,
    },
    footerTitleText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 500,
    },
    hourlyWeatherBlock: {
        flex: 1,
        marginTop: 0,
        paddingTop: 0,
        maxHeight: 200,
    },
    hourlyWeather: {
        marginHorizontal: 20,
        marginTop: 0,
        paddingTop: 0,
    },
    degreeHourly: {
        position: 'absolute',
        fontSize: 16,
        color: '#D9D9D9',
        top: 5,
        right: -5,
    },
    hourlyWrapper: {
        marginTop: 0,
        paddingHorizontal: 20,
        maxWidth: 95,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hourlyIcon: {
        marginTop: 0,
        paddingTop: 0,
        width: 80,
        height: 90,
    },
    textHour: {
        fontSize: 16,
        fontWeight: 500,
        color: '#fff',
    },
    textHourlyTemp: {
        fontWeight: 500,
        fontSize: 36,
        color: '#fff',
        marginTop: 10,
    },

});