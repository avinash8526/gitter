import gitApi from '../api/gitApi';

export function cacheGitData(data){
	return { type : 'GIT_REPO_LIST',data}
}

export function loadGitRepo(data){
	return { type : 'LOAD_GIT_REPO',data}
}

export function commitsLoaded(data,index){
	return { type : 'COMMITS_LOADED',data,index}
}

export function fetchGitRepo(){
	//debugger;
	return function(dispatch){
		return gitApi.getRepoData().then(data => {
			dispatch(loadGitRepo(data));
		}).catch(error => console.error(error));
	};
}

export function loadGitCommits(url,index){
	//debugger;
	return function(dispatch){
		return gitApi.getCommits(url).then(data => {
			console.log(data);
			dispatch(commitsLoaded(data,index));
		}).catch(error => console.error(error));
	};
}