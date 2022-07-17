import {combineReducers} from 'redux';

import auth from './Auth';
import dashboard from './Dashboard';
import incomereport from './IncomeReport';
import wallet from './Wallet';
import investments from './Investments';
import leverage from './Leverage';
import rewards from './Rewards';
import profile from './Profile';
import knowledgecenter from './KnowledgeCenter';
import forgotpassword from './ForgotPassword';

const reducer = combineReducers({
  auth,
  dashboard,
  incomereport,
  wallet,
  investments,
  leverage,
  rewards,
  profile,
  knowledgecenter,
  forgotpassword,
});

export default reducer;
