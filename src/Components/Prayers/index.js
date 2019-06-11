import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Animated, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Logo from "../../images/logo.png";

const { height } = Dimensions.get("window")
const arr = ["Fajar", "Zohor", "Asar", "Maghrib", "Eisha", "Vitar"]
export default class Prayers extends Component {
    constructor() {
        super()
        this.state = {
            _Fajar: 60,
            _Zohor: 60,
            _Asar: 60,
            _Maghrib: 60,
            _Eisha: 60,
            _Vitar: 60,
            sel: "",
            logFlage: true,
            splashOpacity: new Animated.Value(1),
        }
    }

    // componentWillMount() {
    //     for (let i = 0; i < arr.length; i++) {
    //         AsyncStorage.setItem(arr[i], JSON.stringify(60))
    //     }
    // }



    async  componentDidMount() {
        for (let i = 0; i < arr.length; i++) {
            AsyncStorage.getItem(arr[i], (err, data) => {
                if (arr[i] === "Fajar") {
                    this.setState({
                        _Fajar: JSON.parse(data)
                    })
                }
                else if (arr[i] === "Zohor") {
                    this.setState({
                        _Zohor: JSON.parse(data)
                    })
                }
                else if (arr[i] === "Asar") {
                    this.setState({
                        _Asar: JSON.parse(data)
                    })
                }
                else if (arr[i] === "Maghrib") {
                    this.setState({
                        _Maghrib: JSON.parse(data)
                    })
                }
                else if (arr[i] === "Eisha") {
                    this.setState({
                        _Eisha: JSON.parse(data)
                    })
                }
                else if (arr[i] === "Vitar") {
                    this.setState({
                        _Vitar: JSON.parse(data)
                    })
                }
            })
        }
        setTimeout(() => {
            Animated.timing(this.state.splashOpacity, {
                toValue: 0,
                duration: 1000
            }).start(()=>this.setState({logFlage:false}))
        }, 2000)


    }


    add(param) {
        let num = JSON.stringify(param.count + 1)
        try {
            AsyncStorage.setItem(param.name, num)
            this.setState({
                sel: param.name
            })
        } catch (e) {
            console.log(e)
        }
    }


    componentDidUpdate() {
        if (this.state.sel !== "") {
            AsyncStorage.getItem(this.state.sel, (err, data) => {
                if (this.state.sel === "Fajar") {
                    this.setState({
                        _Fajar: JSON.parse(data)
                    })
                }
                else if (this.state.sel === "Zohor") {
                    this.setState({
                        _Zohor: JSON.parse(data)
                    })
                }

                else if (this.state.sel === "Asar") {
                    this.setState({
                        _Asar: JSON.parse(data)
                    })
                }
                else if (this.state.sel === "Maghrib") {
                    this.setState({
                        _Maghrib: JSON.parse(data)
                    })
                }
                else if (this.state.sel === "Eisha") {
                    this.setState({
                        _Eisha: JSON.parse(data)
                    })
                }
                else if (this.state.sel === "Vitar") {
                    this.setState({
                        _Vitar: JSON.parse(data)
                    })
                }
            })
        }
    }



    render() {
        const _PrayersArry = [
            {
                name: "Fajar",
                count: this.state._Fajar
            },
            {
                name: "Zohor",
                count: this.state._Zohor
            },
            {
                name: "Asar",
                count: this.state._Asar
            },
            {
                name: "Maghrib",
                count: this.state._Maghrib
            },
            {
                name: "Eisha",
                count: this.state._Eisha
            },
            {
                name: "Vitar",
                count: this.state._Vitar
            }
        ]
        return (
            <View style={styles.container}>
                <ScrollView>
                    {_PrayersArry.map((val, ind) => {
                        return (
                            <View key={ind} style={styles.listContainer}>
                                <View style={styles.nameView} >
                                    <Text style={styles.nameText} >{val.name}</Text>
                                </View>
                                <View style={styles.btnView} >
                                    <TouchableOpacity style={styles.TouchableOpacityBtn} onPress={this.add.bind(this, val)} activeOpacity={0.5} >
                                        {/* <Text style={styles.btnPlus} >
                                            +
                                    </Text> */}
                                        <Text style={styles.btnPlus} >
                                            {val.count}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }
                    )}
                </ScrollView>
                {(this.state.logFlage) ?
                    <Animated.View style={[styles.logoContainer, { opacity: this.state.splashOpacity }]} >
                        <View style={[styles.logoView]} >
                            <Image source={Logo} style={styles.Image} />
                        </View>
                    </Animated.View>
                    : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#33b5e5"
    },
    listContainer: {
        backgroundColor: "#33b5e5",
        height: height / 11,
        width: "90%",
        alignSelf: "center",
        marginTop: height / 25,
        marginBottom: height / 30,
        flexDirection: "row",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 3,
        elevation: 10,
    },
    nameView: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
    nameText: {
        color: "#fff",
        fontWeight: "400", fontSize: 18
    },
    TouchableOpacityBtn: {
        height: 40,
        width: 40,
        borderRadius: height,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    btnView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        padding: 10,
    },
    btnPlus: {
        color: "#fff",
        fontSize: 16,
    },
    logoContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#33b5e5",
        justifyContent: "center"
    },
    logoView: {
        height: 150,
        width: 150,
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: height
    },
    Image: {
        height: 100,
        width: 100, alignSelf: "center"
    }


});

