import { StatusBarStyle } from "react-native"

const primary = '#DB5445'
const secondary = '#474c3d'
const accent = '#b5a289'
const black = '#141414'
const white = '#fcfcfc'

const light = {
	name: 'light',
	statusBar: 'dark-content' as StatusBarStyle,

	colors: {
		primary: primary,
		secondary: secondary,
		accent: accent,
		black: black,
		white: white,
	},

	common: {
		background: '#e0d9c9',
		text: '#272A22'
	},

	semantic: {
		success: '#46B93C',
		attention: '#EDC531',
		warning: '#C92020',
		info: accent
	},

	login: {
		background: white,
		text: black
	},

	button: {
		background: primary,
		text: white,
		hover: {
			background: secondary,
			text: black,
		}
	},

	card: {
		background: white,
		text: black,
	},

	textInput: {
		background: 'transparent',
		border: primary,
		text: black,
	},
}

export default light;
