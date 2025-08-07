import React from 'react';
import { SystemThemeProvider } from '@/ui/contexts';
import { Router } from '@/Router';

export const App: React.FC = () => {
    __DEV__ && console.info(`----------------------- Carango - ${new Date().toLocaleString()} ---------------------------`);

    return (
        <SystemThemeProvider>
            <Router />
        </SystemThemeProvider>
    );
}
