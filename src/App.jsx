import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import {Redirect, Route, withRouter} from 'react-router-dom'
import {Component, lazy} from "react";
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainerAsync = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainerAsync = lazy(() => import('./components/Profile/ProfileContainer'));
const LoginPage = lazy(() => import('./components/Login/Login'));
const News = lazy(() => import('./components/News/News'));
const Music = lazy(() => import('./components/Music/Music'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }
    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/" render={() => <Redirect to={'/profile'} />}/>
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainerAsync)}/>
                    <Route path="/dialogs" render={withSuspense(DialogsContainerAsync)}/>
                    <Route path="/users" render={withSuspense(UsersContainer)}/>
                    <Route path="/login" render={withSuspense(LoginPage)}/>
                    <Route path="/news" render={withSuspense(News)}/>
                    <Route path="/music" render={withSuspense(Music)}/>
                    <Route path="/settings" render={withSuspense(Settings)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App)
