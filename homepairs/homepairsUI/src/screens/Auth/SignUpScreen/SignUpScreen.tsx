import { connect } from "react-redux";
import { Account, AccountTypes } from "homepairs-types";
import strings from "homepairs-strings";
import {
  AuthPassProps,
  withAuthPage,
} from "homepairs-components";
import {LightColorTheme} from "homepairs-base-styles";
import { withNavigation } from 'react-navigation';
import { withRouter } from "react-router-dom";
import { Platform } from "react-native";
import {NavigationRouteHandler, withNavigationRouteHandler } from 'homepairs-routes';
import { generateAccountForPM, generateAccountForTenant } from 'homepairs-endpoints';
import { SignUpScreenBase, SignUpViewDispatchProps } from "./SignUpScreenBase";

const signUpStrings = strings.signUpPage;
const authPageParam: AuthPassProps = {
  button: signUpStrings.button,
  subtitle: signUpStrings.subtitle,
  loadingModalText: signUpStrings.modal,
  buttonColor: LightColorTheme.primary,
  underButtonText: signUpStrings.currentUserText,
  highlightedText: signUpStrings.signUpHighlight,
};
const mapDispatchToProps : (dispatch: any) => SignUpViewDispatchProps = (dispatch: any) => ({
    // TODO: Finish sign up when backend is ready 
    generateHomePairsAccount: (details: Account, password: String, modalSetOff: () => any, navigation?: NavigationRouteHandler) => {
        // TODO: Remember to Call dispatch when sign up is ready in backend
        if (details.accountType === AccountTypes.PropertyManager) {
            dispatch(generateAccountForPM(details, password, navigation, modalSetOff));
        } else {
            dispatch(generateAccountForTenant(details, password, navigation, modalSetOff));
        }
    },
});


const SignUpScreen = connect(null, mapDispatchToProps)(SignUpScreenBase);
const NavigableAuthPage = withNavigationRouteHandler(SignUpScreen);
const NavigateReadyAuthPage = Platform.OS === 'web' ? withRouter(NavigableAuthPage) : withNavigation(NavigableAuthPage);
const AuthPage = withAuthPage(NavigateReadyAuthPage, authPageParam);
export default AuthPage;