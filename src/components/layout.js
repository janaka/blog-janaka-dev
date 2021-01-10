import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { rhythm, scale } from "../utils/typography"
import '../utils/mode-toggle.css';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(0.75),
          marginBottom: 0,
          marginTop: 0,
          lineHeight: 0,
          display:'inline-block'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: 'none',
            color: 'var(--textTitle)',
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          display:'inline-block'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: 'none',
            color: 'var(--turquoise-fade)',
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        {header}
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label class="switch" for="checkbox">
            <input
              id="checkbox"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <div class="slider round"></div>
          </label>
        )}
      </ThemeToggler>
      
      </header>
      
      <main>{children}</main>
      <footer>
        © 2020-{new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
