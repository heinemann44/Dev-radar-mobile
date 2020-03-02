import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil do GitHub'
            }
        },
    }, {
        defaultNavigationOptions: {
            //Cor do titulo
            headerTintColor: '#FFF',
            // Não mostrar o titulo da pagina anterior  (aparece somente no ISO)
            headerBackTitleVisible: null,
            headerStyle:{
                // cor de fundo da barra de titulo
                backgroundColor: '#7D40E7',
            }
        }
    })
);

export default Routes;