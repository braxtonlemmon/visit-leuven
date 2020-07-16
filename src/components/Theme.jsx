import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    red:   '#E40C2B',
    dark:  '#1D1D2C',
    lightish: '#F7F4E9',
    light: '#EDEAE5',
    pale:  '#3CBCC3',
    pop:   '#EBA63F',
    green: '#438945'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;