import { StylesProvider } from '@material-ui/core';
import React from 'react';
import { LocaleProvider } from '../contexts/LocaleContext';
import styles from './App.module.scss';
import Header from './Header';
import Search from './Search';

export default function App() {
  return (
    <StylesProvider injectFirst>
      <LocaleProvider>
        <header className={ styles.header }>
          <Header/>
        </header>
        <main className={ styles.main }>
          <Search/>
        </main>
      </LocaleProvider>
    </StylesProvider>
  );
}
