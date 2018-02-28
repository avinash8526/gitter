import React, { Component } from 'react';
import CommitList from './CommitListComponent';
import SearchBarComponent from './SearchBarComponent';

class RepoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText:''
        };
        this.onCommitsLoad = this.onCommitsLoad.bind(this);
        this.onFilteredTextChange = this.onFilteredTextChange.bind(this);
    }

    onCommitsLoad(url,index){
        this.props.loadCommits(url,index);
    }

    onFilteredTextChange(filterText){
        this.setState({
            filterText : filterText
        });
    }


    render (){
        var commitRow = [];
        if(this.props.gitlistObj[this.props.id1] !== undefined){
            for(const [index,value] of this.props.gitlistObj[this.props.id1].entries()){
                commitRow.push( <CommitList {...value} filterText={this.state.filterText} key={index}/>);

            }

        }
        return(
            <div className="row row-padded">
                <div className="col-12">
                    <h4>{this.props.name}</h4>
                    <p>{this.props.description}</p>
                    <button type="button" onClick={this.onCommitsLoad.bind(null,`${this.props.url}/commits`,this.props.id1)} className="btn btn-info">Load Commits</button>
                </div>

                <br/>
                <div className="row">
                    <SearchBarComponent filterText={this.onFilteredTextChange}/>
                </div>
                <div className="row col-12">
                    {commitRow}
                </div>
            </div>
        );

    }




}

export default RepoList;