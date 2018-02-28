import React, { Component } from 'react';

const CommitList = (props) => {
    let authorUrl, commiterUrl;
    if (props.author !== null) {
        authorUrl = props.author.avatar_url;
    }
    if (props.committer !== null) {
        commiterUrl = props.committer.avatar_url;
    }


    if (props.commit.message.toLocaleLowerCase().indexOf(props.filterText.toLocaleLowerCase()) > -1) {
        return (
            <div className="row col-12">
                <div className="col-12">
                    <div className="row row-padded commit-row">
                        <div className="col">
                            <h4>Sha:{props.sha}</h4>
                            <span><i>Author</i>: {props.commit.author.name}<img src={authorUrl}
                                                                         alt={props.commit.author.name}/><br/></span>
                            <span><i>Committer</i>: {props.commit.committer.name}<img src={commiterUrl}
                                                                               alt={props.commit.committer.name}/></span>
                            <p><i>Commit Message</i>: {props.commit.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (<div></div>);


};

export default CommitList;