import { Link } from "gatsby"

import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const getImage = graphql`
  {
    fluid: file(relativePath: { eq: "Home-Comfort-Air-logo-650.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          src
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

const MenuIcon = styled.button`
  position: fixed;
  top: 3rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  border-style: none !important;
  cursor: pointer;
  z-index: 8;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: rgb(65, 64, 66);
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
const Wrapper = styled.div`
  background: #fff;
  height: 80px;
  width: 100%;
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;
  background: #d7d7d7;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  z-index: 99999999;
  margin-top: 100px;

  li {
    margin-top: 1rem;
  }

  a {
    font-size: 1.5rem;
    color: #000;
    transition: color 300ms;

    :hover {
      color: blue;
    }
  }
`

const Logo = styled.div`
  margin: 58px 0 0 20px;
`

const HeaderNew = () => {
  const data = useStaticQuery(getImage)
  const [nav, showNav] = useState(false)
  return (
    <Wrapper
      className="mobile-nav fixed-top d-lg-none d-xl-none d-xxl-none
    "
    >
      <Logo>
        <Image fluid={data.fluid.childImageSharp.fluid} alt="logo" />
      </Logo>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/split-systems">Split Systems</Link>
          </li>
          <li>
            <Link to="/ducted-systems">Ducted</Link>
          </li>
          <li>
            <Link to="/specials">Specials</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </MenuLinks>
    </Wrapper>
  )
}

export default HeaderNew
