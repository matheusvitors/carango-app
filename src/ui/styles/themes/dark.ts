import { StatusBarStyle } from "react-native"

const primary = '#DB5445'
const secondary = '#474c3d'
const accent = '#b5a289'
const black = '#141414'
const white = '#fcfcfc'

const dark = {
	name: 'dark',
	statusBar: 'light-content' as StatusBarStyle,

	colors: {
		primary: primary,
		secondary: secondary,
		accent: accent,
		black: black,
		white: white,
	},

	common: {
		background: '#272A22',
		text: '#f7c1c1ff'
	},

	semantic: {
		success: '#46B93C',
		attention: '#f5e836ff',
		warning: '#C92020',
	},

	login: {
		background: black,
		text: white
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
		border: white,
		text: white,
	}
}

export default dark;
