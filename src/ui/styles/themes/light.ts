import { StatusBarStyle } from "react-native"

const primary = '#062460'
const secondary = '#0A5F2E'
const accent = '#93938C'
// const primary = '#184E77'
// const secondary = '#34A0A4'
// const accent = '#D9ED92'
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
		background: '#FEFEFE',
		text: black
	},

	semantic: {
		success: '#46B93C',
		attention: '#EDC531',
		warning: '#C92020',
		info: '#3185FC'
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
