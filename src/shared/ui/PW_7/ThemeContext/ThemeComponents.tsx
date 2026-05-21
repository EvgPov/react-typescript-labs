import { useTheme } from '@/shared/ui/PW_7/ThemeContext/ThemeContext';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="button" onClick={toggleTheme}>
      Переключатель темы: {theme}
    </button>
  );
}

export function ThemeDisplay() {
  const { theme } = useTheme();
  return <p className="paragraph">Отображение текущей темы: {theme}</p>;
}
