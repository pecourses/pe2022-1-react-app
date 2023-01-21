import React, { Component } from 'react';
import CONSTANTS from './constants';
import { ThemeContext } from './contexts';
import styles from './App.module.sass';
import classNames from 'classnames';
import Footer from './components/FooterForHOC';
import ThemeSwitcher from './components/ThemeSwitcherForHOC';

const { LIGHT, DARK, PINK } = CONSTANTS.THEME;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: LIGHT,
    };
  }

  setTheme = newTheme => {
    this.setState({ theme: newTheme });
  };

  render() {
    const { theme } = this.state;
    const pageClassName = classNames({
      [styles.lightTheme]: theme === LIGHT,
      [styles.darkTheme]: theme === DARK,
      [styles.pinkTheme]: theme === PINK,
    });

    return (
      <ThemeContext.Provider value={{ theme, setTheme: this.setTheme }}>
        <div className={pageClassName}>
          <header>
            <span>Header</span> <ThemeSwitcher />
          </header>
          <main>Main Content</main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
