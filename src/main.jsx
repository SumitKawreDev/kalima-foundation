// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { KalimaHome } from './components/foundation/kalima-home'
// import './styles/globals.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <KalimaHome />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { KalimaHome } from './components/foundation/kalima-home'
import './styles/globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KalimaHome />
  </StrictMode>,
)