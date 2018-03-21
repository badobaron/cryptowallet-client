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

import CoinComp from './CoinComp'

class EthComp extends CoinComp {

    constructor(props) {
        super(props)
    }

    handleClick(e){
        this.setState({ isClickable: false })
        fetch(path.ethTransfer, {
            'ethAddress':this.state.toAddress,
            'ethValue':this.state.toAmt
        },window.localStorage.token).then(function (res) {
            this.setState({ isClickable: true })
            if(res.resultCode === "1000"){
                ons.notification.alert('转账成功')
            }
            else{
                ons.notification.alert('转账失败')
            }
        }.bind(this))
    }

}

export default EthComp