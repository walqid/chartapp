import React, { Component } from 'react';
import { List } from 'antd';
import './view2.css';

export default class View2 extends Component {

    selectCountry = (country) => {
        this.props.changeSelectCountry(country);
    }

    render() {
        const {data} = this.props;
        return (
            <div id='view2' className='pane'>
                <div className='header'>Country List</div>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={country => <List.Item onClick = {() => this.selectCountry(country)}>
                        <div>
                            {country.name}
                        </div>
                    </List.Item>}
                />
            </div>
        )
    }
}