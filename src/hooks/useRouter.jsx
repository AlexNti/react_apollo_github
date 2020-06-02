import React from 'react';
import { __RouterContext as RouterContext } from 'react-router';

function useRouter() {
  return React.useContext(RouterContext);
}

export default useRouter;
