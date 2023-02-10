import { useTheme } from 'shared/contexts/theme-context/useTheme';
import { cn } from 'shared/lib';
import { AppRouter } from './providers/router';
import 'app/styles/index.css';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn(['app', theme])}>
      <AppRouter />
    </div>
  );
};

export default App;
