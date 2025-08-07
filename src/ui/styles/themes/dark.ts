import { StatusBarStyle } from "react-native"

const primary = '#F2F3AE'
const secondary = '#D58936'
const accent = '#A44200'
const black = '#0d0d0d'
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
		background: black,
		text: white
	},

	semantic: {
		success: '#46B93C',
		attention: '#218aa4',
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
