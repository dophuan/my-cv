import { ReactChild, ReactChildren } from 'react'
import Footer from './Footer'
import Header from './Header'

interface AuxProps {
  children: ReactChild | ReactChildren
}

const Layout = ({ children }: AuxProps) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
