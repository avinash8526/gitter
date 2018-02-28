export default function gitReducer(state = [], action){
	switch(action.type){
		// debugger;
		case 'GIT_REPO_LIST':
		console.log(action.data);
		var newData = [...state,
			Object.assign([],action.data)
			];
		console.log(newData);	
			return newData ;
			// return action.data;

		case 'LOAD_GIT_REPO':
			return Object.assign({}, state,{
				list :action.data
			});
			//return action.data;

		case 'COMMITS_LOADED':
			return Object.assign({}, state,{
				[action.index] :action.data
			});
		default:
			return state;	
	}
}