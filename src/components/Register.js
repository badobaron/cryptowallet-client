
import React, { Component } from 'react'
import fetch from './common/fetch'
import * as Ons from "react-onsenui"
import * as ons from "onsenui"
import * as path from './common/path'

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
                ons.notification.alert(res.resultMessage)
            }
        })
    }

    cancelClick(e){
        this.props.navigator.popPage()
        //this.props.navigator.pushPage({ comp: Login, props: { key: "Login", navigator: this.props.navigator } })
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='center'>注册</div>
            </Ons.Toolbar>
        );
    }

    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar}>

                <section style={{textAlign: 'center'}}>
                    <p>
                        <Ons.Input
                            value={this.state.username}
                            style={{width: '80%'}}
                            onChange={this.handleUsernameChange.bind(this)}
                            modifier='underbar'
                            float
                            placeholder='Username'/>
                    </p>
                    <p>
                        <Ons.Input
                            value={this.state.password}
                            style={{width: '80%'}}
                            onChange={this.handlePasswordChange.bind(this)}
                            modifier='underbar'
                            type='password'
                            float
                            placeholder='Password'/>
                    </p>
                    <p>
                    <Ons.Button style={{margin: '6px', width: '80%'}} onClick={this.handleClick.bind(this)}>注册</Ons.Button>
                    <Ons.Button style={{margin: '6px', width: '80%'}} modifier='outline' onClick={this.cancelClick.bind(this)}>返回</Ons.Button>
                    </p>
                </section>

            </Ons.Page>
        )
    }

}

export default Register