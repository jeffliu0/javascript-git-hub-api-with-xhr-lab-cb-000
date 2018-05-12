function getRepositories(){
  const req = new XMLHttpRequest()
  req.open("GET", "https://api.github.com/users/jeffliu0/repos")
  req.addEventListener("submit", showRepositories)
  console.log(req.responseText)
  req.send()
}

function showRepositories(event,data){
  //this is set to the XMLHttpRequest object that fired the even
  var repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name +
  '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
