import React from 'react'
import CodeEditors from '../HomeComponents/CodeEditors/CodeEditors'
import Productivity from '../HomeComponents/Productivity/Productivity'
import BottomNav from '../../../Layout/Bottomnav/BottomNav'
import Codespaces from '../HomeComponents/Codespaces/Codespaces'
import GitHubCoPilot from '../HomeComponents/GithubCopilot/GitHubCoPilot'
import Colaboration from '../HomeComponents/Collaboration/Colaboration'

const BottomHome = () => {
  return (
    <div>
    <BottomNav/>
    <Productivity/>
     <CodeEditors/>
     <Codespaces/>
     <GitHubCoPilot/>
     <Colaboration/>
    </div>
  )
}

export default BottomHome