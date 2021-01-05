import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IllustrationUndraw from "../../assets/img/undraw.svg";

const ReactNativeSvg = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi SVG</Text>
            <IllustrationUndraw width={240} height={120}/>
        </View>
    )
}

export default ReactNativeSvg

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    }
})
