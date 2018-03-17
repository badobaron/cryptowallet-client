/*
 * @Author: qugang 
 * @Date: 2018-01-07 14:26:03 
 * @Last Modified by: qugang
 * @Last Modified time: 2018-01-10 16:40:37
 */

import React, { Component } from 'react'
import fetch from './common/fetch'
import * as Ons from "react-onsenui"
import * as ons from "onsenui"
import * as path from './common/path'
import loginBackgroundImage from '../image/login-bg.jpg'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleClick(e) {
        const props = this.props
        fetch(path.register, {
            username: this.state.username,
            userpwd: this.state.password
        }).then(function (res) {
            if (res.resultCode === "1000") {
                ons.notification.alert('注册成功')
                props.navigator.popPage()
            }
            else {
                ons.notification.alert('注册失败')
            }
        })
    }

    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <Ons.Page className="contentT" >
                <img className="login-img" src={loginBackgroundImage} />
                <Ons.List modifier="login register" style={{ textAlign: 'center' }}>
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

                    <Ons.Button modifier="btn-transparent" onClick={this.handleClick.bind(this)}>注 册</Ons.Button>
                    <Ons.Button modifier="btn-transparent" onClick={this.handleClick.bind(this)}>返 回</Ons.Button>

                </Ons.List>
            </Ons.Page>
        )
    }

}

export default Register