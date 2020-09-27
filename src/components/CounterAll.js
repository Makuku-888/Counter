import { render } from '@testing-library/react';
import React, { Component } from 'react'
import Counter from './Counter';

export default class CounterAll extends Counter{
    constructor(props){
        super(props);
        this.props = {

        }
    }

handleIncAll = () =>{
    this.setState(() => { return super.handleIncrease()})
}

handleDecAll = () => {
    this.setState( ()=> {return super.handleDecrease()})
}

    render() {
        return (
            <div>
                <butto onClick={this.handleIncAll} >Increase all</butto>
                <butto onClick={this.handleDecAll} >Decrease all</butto>
            </div>
        )
    }
}
