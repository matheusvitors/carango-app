import { Snackbar, snackbarTypes } from '@/ui/components';
import React, { createContext, PropsWithChildren, use, useState } from 'react';

interface SnackbarContextProps {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
	notify: (message: string, type?: snackbarTypes) => void;
}

const DEFAULT_VALUES: SnackbarContextProps = {
	visible: false,
	setVisible: () => {},
	notify: (message: string, type?: snackbarTypes) => {}
}

const SnackbarContext = createContext<SnackbarContextProps>(DEFAULT_VALUES);

export const SnackbarContextProvider: React.FC<PropsWithChildren> = ({ children }) => {

	const [visible, setVisible] = useState(false);
	const [options, setOptions] = useState<{message: string, type?: snackbarTypes}>({ message: '' })

	const notify = (message: string, type?: snackbarTypes) => {
		setVisible(true);
		setOptions({message, type});
	}

	return (
		<SnackbarContext.Provider value={{visible, setVisible, notify}}>
			{children}
			<Snackbar
				message={options.message}
				type={options.type}
				isVisible={visible}
				setIsVisible={setVisible}
			/>
		</SnackbarContext.Provider>
	);
}

export const useSnackbar = () => use(SnackbarContext);
