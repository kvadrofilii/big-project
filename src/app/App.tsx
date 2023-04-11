import { useEffect } from 'react';

import { AppRouter } from 'app/providers/AppRouter';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return <AppRouter />;
};

export default App;
