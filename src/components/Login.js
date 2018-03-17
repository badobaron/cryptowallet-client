/*
 * @Author: qugang 
 * @Date: 2018-01-07 00:39:16 
 * @Last Modified by: qugang
 * @Last Modified time: 2018-01-10 16:39:51
 */

import React, { Component } from 'react'
import fetch from './common/fetch'
import * as Ons from "react-onsenui"
import * as ons from "onsenui"
import * as path from './common/path'
import Register from './Register'
import Home from './Home'
import loginBackgroundImage from '../image/login-bg.jpg'
import loginLogoImage from '../image/logo.png'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleClick(e) {

        const props = this.props

        props.navigator.pushPage({
            comp: Home, props: {
                key: "Home", navigator: props.navigator,
                username: "test", address: "test"
            }
        })
        // fetch(path.login, {
        //     username: this.state.username,
        //     userpwd: this.state.password
        // }).then(function (res) {
        //     if (res.resultCode === "1000") {
        //         window.localStorage.token = res.token

        //         props.navigator.pushPage({
        //             comp: Home, props: {
        //                 key: "Home", navigator: props.navigator,
        //                 username: res.user.username, address: res.user.ethAddress
        //             }
        //         })
        //     }
        //     else {
        //         ons.notification.alert('登陆失败')
        //     }
        // })
    }
    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    register() {
        this.props.navigator.pushPage({ comp: Register, props: { key: "Register", navigator: this.props.navigator } })
    }
    render() {
        return (
            <Ons.Page className="contentT" renderToolbar={() => (
                <Ons.Toolbar className="none">
                    <div className='center'>登陆</div>
                </Ons.Toolbar>
            )}>

                <img className="login-img" src={loginBackgroundImage} />

                <Ons.List modifier="login" style={{ textAlign: 'center' }}>
                    <img className="logo-img" src={loginLogoImage} />
                    <Ons.ListItem>
                        <Ons.Icon icon="ion-person" />
                        <Ons.Input
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                            modifier='underbar'
                            float
                            placeholder='Username' />
                    </Ons.ListItem>
                    <Ons.ListItem>
                        <ons-icon icon="ion-ios-locked" />
                        <Ons.Input
                            value={this.state.password}
                            onChange={this.handlePasswordChange.bind(this)}
                            modifier='underbar'
                            type='password'
                            float
                            placeholder='Password' />
                    </Ons.ListItem>

                    <Ons.Button modifier="btn-transparent" onClick={this.handleClick.bind(this)}>登 陆</Ons.Button>
                    <Ons.Button modifier="btn-transparent" onClick={this.register.bind(this)}>注 册</Ons.Button>

                </Ons.List>
            </Ons.Page>
        )
    }

}

export default Login