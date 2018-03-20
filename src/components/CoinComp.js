/*
 * @Author: qugang 
 * @Date: 2018-01-08 00:11:56 
 * @Last Modified by: qugang
 * @Last Modified time: 2018-01-08 12:16:25
 */

import React, { Component } from 'react'
import fetch from './common/fetch'
import * as Ons from "react-onsenui"
import * as ons from "onsenui"
import * as path from './common/path'
var QRCode = require('qrcode.react');

class CoinComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.content,
            address: this.props.address,
            balance: this.props.balance,
            toAddress: "",
            toAmt:"",
            isClickable:true
        }
    }

    utf16to8(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    }

    renderToolbar() {

        return (
            <Ons.Toolbar>
                <div className='center'>{this.state.title}</div>
            </Ons.Toolbar>
        );
    }

    handleprivateKeyChange(e) {
        this.setState({ toAddress: e.target.value });
    }
    handleValueChange(e) {
        this.setState({ toAmt: e.target.value });
    }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
            <div className="red-list">
                <div className="code-tiele">  收款二维码  </div>
                <Ons.List modifier="home">
                        <Ons.ListItem modifier="canvas">
                            <div className="code">
                                <QRCode size={128} value={this.utf16to8(this.props.address)} />
                            </div>
                        </Ons.ListItem>
                        <Ons.ListItem modifier="home-message">
                            <span className="right">{this.props.address}</span>
                        </Ons.ListItem>
                        <div className="borderT"><span /></div>

                        <Ons.ListItem modifier="home-message marginTS">
                            账户余额<span className="right">{this.state.balance}</span>
                        </Ons.ListItem>
                        

                        <Ons.ListItem modifier="home-input marginT">
                            <ons-icon icon="ion-ios-person-outline" />
                            <Ons.Input
                                value={this.state.toAddress}
                                onChange={this.handleprivateKeyChange.bind(this)}
                                modifier='underbar'
                                float
                                placeholder='请输入转账地址' />
                        </Ons.ListItem>
                        <Ons.ListItem modifier="home-input marginB">
                            <ons-icon icon="ion-ios-location-outline" />
                            <Ons.Input
                                value={this.state.toAmt}
                                onChange={this.handleValueChange.bind(this)}
                                modifier='underbar'
                                float
                                placeholder='请输入转账数额' />
                        </Ons.ListItem>
                    </Ons.List>

                    <Ons.Button modifier="btn-red" onClick={this.handleClick.bind(this) } disabled={!this.state.isClickable}>
                            {this.state.isClickable ? '转 出' : '请求中...'}
                    </Ons.Button>

            </div>
        </Ons.Page >
        )
    }
}

export default CoinComp