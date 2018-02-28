var api = {};

api.getRepoData = function() {
   //let url = "https://api.github.com/users/avinash8526/repos";
  let url = "https://api.github.com/users/facebook/repos";
    return fetcher(url);
};

api.getCommits = function(url){
  return fetcher(url);
};

function fetcher(url){
  return fetch(url, {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'GET', // *GET, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *same-origin
    redirect: 'follow', // *manual, error
    referrer: 'no-referrer' // *client
  })
      .then(response => response.json());
}




export default api;