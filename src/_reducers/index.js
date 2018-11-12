import { combineReducers } from 'redux';

import { authentication } from './users.reducer';
import { alert } from './alert.reducer';
import { commissioning } from './commissioning.reducer'
import { commands } from './commands.reducer'
import { wifi } from './wifi.reducer'
import { trends } from './trends.reducer'
import { overView } from './overView.reducer';
import { opTable } from './opTable.reducer';
import { siteImage } from './siteImage.reducer';
import { tracker } from './tracker.reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  commissioning,
  commands,
  wifi,
  trends,
  overView,
  tracker,
  opTable,
  siteImage,
});

export default rootReducer;
