import 'styled-components';
import { StatusBarStyle } from 'react-native';

/**
 * Este arquivo serve para sobrescrever a tipagem DefaultTheme no styled-component do sistema
 */

declare module 'styled-components/native' {
    export interface DefaultTheme {
		name: string,
		statusBar: StatusBarStyle;

		colors: {
			primary: string,
			secondary: string,
			accent: string,
			black: string,
			white: string,
		}

		common: {
			background: string,
			text: string
		},

		semantic: {
			success: string,
			attention: string,
			warning: string,
			info: string
		},

		login: {
			background: string,
			text: string
		},

		button: {
			background: string,
			text: string,
			hover: {
				background: string,
				text: string,
			}
		},

		card: {
			background: string,
			text: string
		},

		textInput: {
			background: string,
			border: string,
			text: string,
		},
	}
}
