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

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "bb2",
            password: "bb2"
        }
    }

    handleClick(e) {

        const props = this.props

        fetch(path.login, {
            username: this.state.username,
            userpwd: this.state.password
        }).then(function (res) {
            if (res.resultCode === "1000") {
                window.localStorage.token = res.token;

                props.navigator.pushPage({
                    comp: Home, props: {
                        key: "Home",
                        navigator: props.navigator,
                        username: res.user.username,
                        ethAddress: res.user.ethAddress,
                        ethBalance: res.user.ethBalance,
                        btcAddress: res.user.btcAddress,
                        btcBalance: res.user.btcBalance
                    }
                })
            }
            else {
                ons.notification.alert(res.resultMessage)
            }
        })
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='center'>登录</div>
            </Ons.Toolbar>
        );
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
            <Ons.Page renderToolbar={this.renderToolbar}>

                <section style={{textAlign: 'center'}}>
                    <p>
                        <Ons.Input
                            value={this.state.username}
                            style={{width:'80%'}}
                            onChange={this.handleUsernameChange.bind(this)}
                            modifier='underbar'
                            float
                            placeholder='Username' />
                    </p>
                    <p>
                        <Ons.Input
                            value={this.state.password}
                            style={{width:'80%'}}
                            onChange={this.handlePasswordChange.bind(this)}
                            modifier='underbar'
                            type='password'
                            float
                            placeholder='Password' />
                    </p>
                    <p>
                        <Ons.Button style={{margin: '6px',width:'80%'}} onClick={this.handleClick.bind(this)}>登 录</Ons.Button>
                        <Ons.Button style={{margin: '6px',width:'80%'}} modifier='outline' onClick={this.register.bind(this)}>注册</Ons.Button>
                    </p>
                    <p></p>
                </section>

            </Ons.Page>
        )
    }

}

export default Login