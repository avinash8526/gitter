import React, { Component } from 'react';

export default class SearchBarComponent extends React.Component{
    constructor(props){
        super(props);
        this.handleFilteredText = this.handleFilteredText.bind(this);

    }

    handleFilteredText(event){
        this.props.filterText(event.target.value);
    }

    render(){
        return (
            <div className="col-12">
                <div className="col-12 npadding">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" placeholder="Search commit message" required onChange={this.handleFilteredText}/>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
};