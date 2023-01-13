import {takeEvery, takeLatest, all} from 'redux-saga/effects';
import * as actions from './../actions/ActionTypes';

import * as auth from './Auth';
import * as dashboard from './Dashboard';
import * as incomereport from './IncomeReport';
import * as wallet from './Wallet';
import * as investments from './Investments';
import * as leverage from './Leverage';
import * as rewards from './Rewards';
import * as profile from './Profile';
import * as knowledgecenter from './KnowledgeCenter';
import * as forgotpassword from './ForgotPassword';
import * as verifyotp from './VerifyOtp';

function* rootSaga() {
  yield takeLatest(actions.GET_APP_VERSION, auth.getAppVersionSaga);
  yield takeLatest(actions.INIT_LOGIN, auth.authenticate);
  //   yield takeLatest(actions.INIT_AUTH_STATUS, auth.checkAuthStatus);
  yield takeLatest(actions.INIT_LOGOUT, auth.logout);
  yield takeLatest(actions.GET_SPONSOR_NAME, auth.getSponsorNameSaga);
  yield takeLatest(actions.INIT_SIGNUP, auth.register);
  yield takeLatest(actions.CHANGE_PASSWORD, auth.changePassword);
  yield takeLatest(
    actions.FORGOT_PASSWORD,
    forgotpassword.processForgotPasswordSaga,
  );

  yield takeLatest(actions.GET_USER_DETAILS, auth.getUserDetails);
  yield takeLatest(actions.GET_COUNTRY_LIST, auth.getCountryListSaga);
  yield takeLatest(actions.GET_APPROVERS, dashboard.getApprovers);
  yield takeLatest(actions.UPDATE_MY_PROFILE, dashboard.updateMyProfile);

  yield takeLatest(actions.GET_FAST_TRACK_QUALIFIER, auth.fastTrackQualifier);
  yield takeLatest(
    actions.GET_CURRENT_FAST_TRACK_QUALIFIER,
    auth.currentWeekFastTrackQualifier,
  );
  yield takeLatest(
    actions.GET_DASHBOARD_INCOME_DETAIL,
    incomereport.dashboardIncomeDetail,
  );

  yield takeLatest(
    actions.GET_MANAGEMENT_PERFORMANCE_INCOME,
    incomereport.managementPerformanceReport,
  );
  yield takeLatest(
    actions.GET_PERFORMANCE_INCOME,
    incomereport.performanceReport,
  );
  yield takeLatest(
    actions.GET_CORPORATE_PERFORMANCE_INCOME,
    incomereport.corporatePerformanceReport,
  );
  yield takeLatest(actions.GET_ROI_INCOME, incomereport.roiIncomeReport);
  yield takeLatest(
    actions.GET_BUSINESS_FLUSH_REPORT,
    incomereport.businessFlushReport,
  );
  yield takeLatest(
    actions.GET_LEVELWISE_PERFORMANCE_INCOME,
    incomereport.levelwisePerformanceReport,
  );
  yield takeLatest(
    actions.GET_WEEKWISE_PERFORMANCE_INCOME,
    incomereport.weekwisePerformanceReport,
  );
  // wallet
  yield takeLatest(
    actions.ADD_FUND_TO_WALLET_VIA_MDTX,
    wallet.addFundToWalletViaMdtx,
  );
  yield takeLatest(
    actions.ADD_FUND_TO_WALLET_VIA_USDT,
    wallet.addFundToWalletViaUsdt,
  );

  yield takeLatest(actions.GET_ADD_FUND_HISTORY, wallet.addFundHistory);
  yield takeLatest(actions.GET_WITHDRAWAL_FUND, wallet.withdrawalFund);
  yield takeLatest(actions.GET_WITHDRAWAL_HISTORY, wallet.withdrawalHistory);
  yield takeLatest(
    actions.GET_INVESTMENT_FUND_HISTORY,
    wallet.investmentFundHistory,
  );
  yield takeLatest(actions.GET_CASH_WALLET_HISTORY, wallet.cashWalletHistory);
  yield takeLatest(actions.GET_TRANSFER_FUND_REPORT, wallet.transferFundReport);

  yield takeLatest(
    actions.WITHDRAWAL_REQUEST_USDT,
    wallet.withdrawalRequestUsdtSaga,
  );
  yield takeLatest(
    actions.WITHDRAWAL_REQUEST_MDTX,
    wallet.withdrawalRequestMdtxSaga,
  );
  yield takeLatest(
    actions.WITHDRAWAL_REQUEST_CRYPTOBOX_EXCHANGE,
    wallet.withdrawalRequestCryptoboxExchangeSaga,
  );
  yield takeLatest(
    actions.WITHDRAWAL_INVEST_COMPOUNDING,
    wallet.withdrawalInvestCompoundingSaga,
  );
  yield takeLatest(
    actions.TRANSFER_FUND_TO_INVESTMENT_WALLET,
    wallet.transferFundToInvestmentWalletSaga,
  );

  yield takeLatest(
    actions.GET_INVESTMENT_WALLET_BALANCE,
    wallet.investmentWalletBalanceSaga,
  );
  yield takeLatest(
    actions.GET_INCOME_WALLET_BALANCE,
    wallet.incomeWalletBalanceSaga,
  );
  yield takeLatest(
    actions.GET_TOTAL_FUND_WALLET_BALANCE,
    wallet.totalFundWalletBalanceSaga,
  );
  yield takeLatest(
    actions.GET_MDTX_SECU_WALLET_BALANCE,
    wallet.mdtxWalletBalanceSaga,
  );
  yield takeLatest(
    actions.RELOAD_ALL_WALLET_BALANCE,
    wallet.reloadAllWalletBalanceSaga,
  );

  yield takeLatest(actions.GET_WITHDRAWAL_ON_OFF, wallet.withdrawalOnOffSaga);
  // Investments
  yield takeLatest(actions.GET_MY_INVESTMENTS, investments.myInvestments);
  yield takeLatest(
    actions.GET_MY_COMPOUND_INVESTMENTS,
    investments.myCompoundInvestments,
  );

  yield takeLatest(
    actions.GET_INVESTMENT_PACKAGE,
    investments.investmentPackagesSaga,
  );
  yield takeLatest(actions.MAKE_INVESTMENT, investments.makeInvestmentSaga);
  // Leverage
  yield takeLatest(actions.GET_MY_LEVERAGE, leverage.myLeverage);
  yield takeLatest(actions.GET_TEAM_LEVERAGE, leverage.teamLeverage);

  // Monthly ranking club
  yield takeLatest(
    actions.GET_MONTHLY_RANKING_CLUB,
    rewards.monthlyRankingClub,
  );
  yield takeLatest(
    actions.GET_LIFETIME_RANKING_REWARDS,
    rewards.lifetimeRankingRewards,
  );
  yield takeLatest(actions.GET_ZOOM_REWARD_LIST, rewards.zoomRewardList);
  yield takeLatest(
    actions.GET_CRYPTOBOX_REWARD_LIST,
    rewards.getCryptoboxRewardsListSaga,
  );
  yield takeLatest(
    actions.GET_CRYPTOBOX_REGIONAL_REWARD_LIST,
    rewards.getCryptoboxRegionalRewardsListSaga,
  );

  yield takeLatest(actions.GET_ROI_ON_OFF, rewards.ROIOnOffSage);

  yield takeLatest(actions.CLAIM_MDTX_REWARD, rewards.claimMdtxReward);
  yield takeLatest(actions.TRANSFER_FUND_TO_OTHER, wallet.transferFundToOther);
  // Profile
  yield takeLatest(actions.GET_SUB_ACCOUNTS, profile.subAccounts);
  yield takeLatest(actions.GET_MY_TICKETS, profile.myTickets);
  yield takeLatest(actions.SUBMIT_POS_REQUEST, profile.submitPosRequest);
  yield takeLatest(
    actions.SUBMIT_SUPPORT_REQUEST,
    profile.submitSupportRequest,
  );
  yield takeLatest(
    actions.SUBMIT_CHANGE_LOGIN_PASSWORD,
    profile.changeLoginPassword,
  );
  yield takeLatest(
    actions.SUBMIT_CHANGE_WALLET_PASSWORD,
    profile.changeWalletPassword,
  );
  yield takeLatest(actions.SUBMIT_UPDATE_PROFILE, auth.updateProfile);
  yield takeLatest(
    actions.GET_KNOWLEDGE_CENTER_LIST,
    knowledgecenter.knowledgeCenter,
  );

  yield takeLatest(
    actions.UPDATE_EMAIL_ADDRESS,
    profile.updateEmailAddressSaga,
  );
  yield takeLatest(actions.VERIFY_EMAIL_OTP, profile.verifyEmailOtpSaga);
  yield takeLatest(actions.SET_2FA_AUTH, profile.set2FAAuthSaga);
  yield takeLatest(actions.LOGIN_OTP_VERIFY, auth.loginOtpVerifySaga);
  yield takeLatest(actions.SEND_EMAIL_OTP, verifyotp.sendOtpOnEmail);
  yield takeLatest(actions.SEND_TXN_PASS_CHANGE, profile.sendTxnPasswordChange);
  // yield takeLatest(actions.VERIFY_EMAIL_OTP, verifyotp.verifyOtpOnEmail);
}
export default rootSaga;
