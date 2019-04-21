import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from "react-redux";
import { Navigation } from 'react-native-navigation';
import thunk from "redux-thunk";
import * as reducers from "./src/reducers";
import * as appActions from "./src/reducers/app/actions";
import { registerScreens } from "./src/registerScreen";
import { YellowBox } from 'react-native';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer)

registerScreens(store, Provider);

export default class App {
  constructor() {

    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setDefaultOptions({
        topBar: {
          visible: false,
          height: 0
        },

      })

      store.subscribe(this.onStoreUpdate.bind(this));
      store.dispatch(appActions.appInitialized());
      YellowBox.ignoreWarnings(['Warning:']);
    });
  }


  onStoreUpdate() {
    const { root } = store.getState().app;
    if (this.currentRoot !== root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp(root) {
    switch (root.app) {
      case 'login':
        Navigation.setRoot({
          root: {
            stack: {
              children: [{
                component: {
                  id: "SignIn",
                  name: "LiHOTea.SignIn"
                }
              }
]
            }
          }
        });
        return;
      case 'after-login':
        Navigation.setRoot({
          root: {
            sideMenu: {
              id: "Navigation",
              left: {
                component: {
                  id: "SideNavigation",
                  name: "LiHOTea.SideNavigation"
                }
              },
              center: {
                stack: {
                  id: "Pay",
                  children: [{
                    component: {
                      id: "PayScreen",
                      name: "LiHOTea.PayScreen"
                    }
                  }]
                }
              }
            },
            
          }
        });
        return;
      default:
        console.error('Unknown  app root');
    }
  }
}