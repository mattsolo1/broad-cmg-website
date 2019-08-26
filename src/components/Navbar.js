import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import styled from 'styled-components'

const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #006DB6;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 20px;
`

const LogoContainer = styled.div`
`

const NavMenu = styled.div`
  flex-direction: row;
  margin-top: 10px;
`

const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  font-size: 22px;
  padding-left: 50px;
`

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <NavBarContainer
        role="navigation"
        aria-label="main-navigation"
      >
        <LogoContainer>
            <Link to="/">
              <img width="300" height="50" src="/img/broad_cmg_logo.png" />
            </Link>
        </LogoContainer>
        <NavMenu>
          <NavLink to="/about">
            Overview 
          </NavLink>
          <NavLink to="/about">
            Workflow
          </NavLink>
          <NavLink to="/apply">
            About 
          </NavLink>
          <NavLink to="/investigators">
            Events
          </NavLink>
        </NavMenu>
      </NavBarContainer>
    )
  }
}

export default Navbar
