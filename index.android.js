import React, { Component } from 'react'
import { Text, View, AppRegistry, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'

export default class app2 extends Component {
	constructor() {
		super()
	}
	render(){
		const gerarNovaFrase = () => {
			let numeroAleatorio = Math.random()
			numeroAleatorio = Math.floor(numeroAleatorio * 5)

			let frases = []
			frases[0] = 'aa'
			frases[1] = 'bb'
			frases[2] = 'cc'
			frases[3] = 'dd'
			frases[4] = 'ee'

			let fraseEscolhida = frases[numeroAleatorio]

			Alert.alert(fraseEscolhida)
		}
		return(
			<View style={styles.principal}>
				<Image source={require('./components/assets/logo.png')} />
				<TouchableOpacity style={styles.botao} onPress={gerarNovaFrase}>
					<Text style={styles.textoBotao}>Nova Frase</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	principal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
		// backgroundColor: '#538530'
	},
	botao: {
		backgroundColor: '#538530',
		paddingVertical: 10,
		paddingHorizontal: 40,
		marginTop: 20
	},
	textoBotao: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold'
	},
	// header: {
	// 	flex: 1, //1:3
	// 	backgroundColor: 'brown',
	// },
	// content: {
	// 	flex: 3, //1:3
	// 	backgroundColor: 'yellowgreen',
	// },
	// footer: {
	// 	flex: 1, //1:3
	// 	backgroundColor: 'orangered',
	// }
});


AppRegistry.registerComponent('app2', () => app2)
