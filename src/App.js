import React, { Component } from 'react';
import data from './data';
import { Layout } from 'antd';
import View1 from './views/View1';
import View2 from './views/View2';
import './app.css';

const { Sider, Content, Footer } = Layout;

export default class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            selectedCountry: data[0],
        }
    }

    changeSelectCountry = value => {
        this.setState({
            selectedCountry: value
        })
    }

    render() {
        const {selectedCountry} = this.state;

        return (
            <div>
                <Layout style={{ height: 920 }}>

                    <Layout>
                        <Content style={{ height: 300 }}>
                            <View1 country={selectedCountry}/>
                        </Content>
                        <Layout style={{ height: 600 }}>
                            <Content>
                            <View2 data={data} changeSelectCountry={this.changeSelectCountry}/>
                            </Content>

                        </Layout>
                    </Layout>
                </Layout>
                <Layout>
                    <Footer style={{ height: 20 }}>
                        <div style={{marginTop: -10}}>
                            Built by <a href='#'>Waleed Qi'dan</a>;
                        </div>
                    </Footer>
                </Layout>
            </div>
        )
    }
}
