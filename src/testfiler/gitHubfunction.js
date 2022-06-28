import {myUrl} from './constExports/globalConstants'; 
import {headerArray} from './constExports/globalConstants'; 

let githubDetails = []

var avatarElm = document.createElement("img")
avatarElm.className = "responsiveSmallImg"
avatarElm.id = "avatar-elm"
// the avatar element have to be inserted/appended somewhere in order to be rendered
// Like: document.body.appendChild(avatarElm)


// For the time being I want this to run whenever this module is called upon.
fetchGithubData(myUrl)

async function fetchGithubData(urLocator) {
  // read github header data
  const response = await fetch(urLocator);
  const data = await response.json();

  const repoResponse = await fetch(data.repos_url);
  const repoData = await repoResponse.json();

  // render
  repoData.forEach((githubObject) => {
    githubDetails.push(`Name: ${githubObject.full_name} <br />
    Url: ${githubObject.url} <br />
    Created: ${githubObject.created_at} <br />
    Updated: ${githubObject.updated_at} <br />
    Visibility: ${githubObject.visibility} <br />
    Default branch: ${githubObject.default_branch} <br />
    Size: ${githubObject.size} <br />
    Main language: ${githubObject.language} <br />`)
  })
    
  renderRepositoryData(data, githubDetails)
}

function renderRepositoryData(reposHeader, reposDetails) {
    Object.entries(reposHeader).forEach(function([key, value]) {
      var elementText = `${key}: ${value}`
      var sValue = value
    
      if (headerArray.includes(key)) {
          if (key === 'avatar_url') {
            avatarElm.setAttribute("src", sValue)
          }
          else {
            addOppgaveContent(oppgavesection2Elm, elementText, 'P')
          }
      }
    })
    
    reposDetails.forEach((value) => ( addOppgaveContent(oppgavesection3Elm, value, 'P')
    ))
}


