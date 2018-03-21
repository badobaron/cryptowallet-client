

import React, { Component } from 'react'
import fetch from './common/fetch'
import * as Ons from "react-onsenui"
import * as ons from "onsenui"
import * as path from './common/path'
import BtcComp from "./BtcComp"
import EthComp from "./EthComp"

var QRCode = require('qrcode.react')

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: this.props.username,
            ethAddress: this.props.ethAddress,
            ethBalance: this.props.ethBalance,
            btcAddress: this.props.btcAddress,
            btcBalance: this.props.btcBalance,
            value: ""
        }
    }


    renderTabs() {

        return [
            {
                content: <EthComp content="ETH" address={this.state.ethAddress} balance={this.state.ethBalance} />,
                tab: <Ons.Tab label='ETH' icon='md-home' />
            },
            {
                content: <BtcComp content="BTC" address={this.state.btcAddress} balance={this.state.btcBalance} />,
                tab: <Ons.Tab label='BTC' icon='md-settings' />
            }
        ];
    }

    render() {
        return (
            <Ons.Page>
                <Ons.Tabbar
                    swipeable={true}
                    position='auto'
                    index={this.state.index}
                    onPreChange={(event) =>
                    {
                        if (event.index != this.state.index) {
                            this.setState({index: event.index});
                        }
                    }
                    }
                    renderTabs={this.renderTabs.bind(this)}
                />
            </Ons.Page>
        );
    }
}

export default Home