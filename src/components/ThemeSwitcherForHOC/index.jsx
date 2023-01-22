import CONSTANTS from '../../constants';
import ThemeContext from '../../contexts/themeContext';
import { withContext } from '../HOCs';

const { LIGHT, DARK, PINK } = CONSTANTS.THEME;

function ThemeSwitcher ({ value: { theme, setTheme } }) {
  const changeTheme = ({ target: { value } }) => {
    setTheme(value);
  };

  return (
    <select value={theme} onChange={changeTheme}>
      <option value={LIGHT}>Light</option>
      <option value={DARK}>Dark</option>
      <option value={PINK}>Pink</option>
    </select>
  );
}

export default withContext(ThemeSwitcher, ThemeContext);
