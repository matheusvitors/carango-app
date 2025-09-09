import React from 'react';
import { ActivityIndicator, ButtonProps, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import Icon from '@react-native-vector-icons/feather'

interface CustomButtonProps {
	label: string;
    disabled?: boolean;
    width?: string;
	loading?: boolean;
	opacity?: number;
	customStyle?: 'filled' | 'outline' | 'transparent';
	type?: 'success' | 'attention' | 'warning' | 'info';
	noMargin?: boolean;
	backgroundColor?: string;
	textColor?: string;
	rightIcon?: any;
	leftIcon?: any;
    onPress: () => any;
}

interface ButtonContainerProps {
	width: string;
	disabled?: boolean;
	noMargin?: boolean;
	backgroundColor?: string;
	textColor?: string;
	border?: string;
}


export const Button: React.FC<CustomButtonProps> = ({label, loading, opacity, customStyle, type, rightIcon, leftIcon, disabled, onPress, width, noMargin, backgroundColor, textColor,  ...props}) => {

		const theme = useTheme();

		const customStyles: any = {
		'filled': {
			backgroundColor: backgroundColor || undefined,
			textColor: textColor || undefined,
			border: undefined,
			underlayColor: theme.colors.accent
		},

		'outline': {
			backgroundColor: textColor || theme.button.text,
			textColor: backgroundColor || theme.button.background,
			border: backgroundColor || theme.button.background,
			underlayColor: theme.colors.accent,
		},

		'transparent': {
			backgroundColor: textColor || theme.button.text,
			textColor: backgroundColor || theme.button.background,
			border: textColor || theme.button.text,
			underlayColor: theme.colors.accent,
		},
	}

	const buttonType = customStyle ? customStyles[customStyle] : customStyles['filled'];


	return (
		<>{ !loading ?
				<Container
					onPress={disabled ? () => {} : onPress}
					activeOpacity={opacity}
					width={width || '90%'}
					disabled={disabled}
					noMargin={noMargin}
					backgroundColor={buttonType.backgroundColor}
					textColor={buttonType.textColor}
					border={buttonType.border}
					underlayColor={buttonType.underlayColor || theme.colors.accent}
				>
					<Content>
						{leftIcon && leftIcon.length > 0 && <Icon name={leftIcon} size={24} color={textColor || buttonType.textColor} />}
						<Label textColor={buttonType.textColor}>
							{label}
						</Label>
						{rightIcon && rightIcon.length > 0 && <Icon name={rightIcon} size={24} color={textColor || buttonType.textColor} />}
					</Content>
				</Container>
			:
				<LoadingContainer width={width || '100%'}>
					<ActivityIndicator color={theme.button.text} />
				</LoadingContainer>
		}</>
	);
}

const Container = styled.TouchableHighlight<ButtonContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${props => props.width} ;
    height: 50px;
    margin-top: ${props => props.noMargin ? '0px' : '10px'};
    margin-bottom: ${props => props.noMargin ? '0px' : '10px'};

	background-color: ${props => props.backgroundColor || props.theme.button.background};
	color: ${props => props.textColor || props.theme.button.text};

    border-radius: 10px;
	border: ${props => props.border ? `2px solid ${props.border}` : 'none'};

    opacity: ${props => props.disabled ? 0.6 : 1};
`;


const LoadingContainer = styled.View<ButtonContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${props => props.width} ;
    height: 50px;
    margin-top: ${props => props.noMargin ? '0px' : '10px'};
    margin-bottom: ${props => props.noMargin ? '0px' : '10px'};

    background-color: ${props => props.theme.button.background};

    border-radius: 25px;

`;

const Label = styled.Text<{textColor?: string;}>`
    color: ${props => props.textColor || props.theme.button.text};
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`;

const Content = styled.View`
	display: flex;
    align-items: center;
    justify-content: center;
	flex-direction: row;
	gap: 10px;
`

