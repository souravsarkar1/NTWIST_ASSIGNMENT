import React from 'react'
import CodeEditors from '../HomeComponents/CodeEditors/CodeEditors'
import Productivity from '../HomeComponents/Productivity/Productivity'
import BottomNav from '../../../Layout/Bottomnav/BottomNav'
import Codespaces from '../HomeComponents/Codespaces/Codespaces'
import GitHubCoPilot from '../HomeComponents/GithubCopilot/GitHubCoPilot'
import Colaboration from '../HomeComponents/Collaboration/Colaboration'
import Secruty from '../HomeComponents/Secruty/Secruty'
import LastImage from '../HomeComponents/LastImage/Lastimage'

const BottomHome = () => {
  return (
    <div>
      <BottomNav />
      <Productivity />
      <CodeEditors />
      <Codespaces />
      <GitHubCoPilot />
      <Colaboration />
      <Secruty />
      <LastImage />
    </div>
  )
}

export default BottomHome