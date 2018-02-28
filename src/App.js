import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/bootstrap.min.css';
import './App.css';
import mockData from './mockData/gitlist';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RepoList from './components/RepoListComponent';
import * as gitListAction from './actions/cacheGitListAction';

var obj = {
    name: "Avinash",
    description: "SDE"
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mockData: mockData
        };
        this.renderPreLoader = this.renderPreLoader.bind(this);
        this.loadCommits = this.loadCommits.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
        //this.props.actions.loadGitRepo(this.state.mockData);
    }

    renderPreLoader(row){
        if(! row.length){
            return (
                <div>
                    <h4>Loading from Github</h4>
                </div>
            );
        }
    }

    loadCommits(url,index){
        this.props.actions.loadGitCommits(url,index);
    }

    renderMessage(message){
        if(message == undefined){
            return(
                <div></div>
            );
        }
        return(
            <div className="alert alert-danger">
                <h3>{message}</h3>
            </div>
        );
    }

    render() {
        var row = [];
        var self = this;
        var message ;
        if (this.props.gitlist.list !== undefined && this.props.gitlist.list !== null) {
            debugger;
            if(this.props.gitlist.list.message !== undefined){
                message = this.renderMessage(this.props.gitlist.list.message);
                row.push("Something went wrong");
            }
            else {
                this.props.gitlist.list.forEach(function (data,index) {
                    row.push(<RepoList {...data} key={index} id1={index} loadCommits={self.loadCommits} gitlistObj={self.props.gitlist} />)
                });
            }

        }

        return (
            <div className="App">
                <header>
                    <h1 className="jumbotron">Welcome to Gitter</h1>

                </header>
                <h3> A tool inspector for repo commits</h3>
                {this.renderPreLoader(row)}
                <div>
                    {row}

                </div>
                <div>
                    {message}
                </div>


            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    // debugger;
    return {
        gitlist: state.gitRepoList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gitListAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
