import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link, graphql} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'

const Welcome = styled.div`
  display: flex;
  flex-direction: column;

  .welcome-top-section {
    padding-left: 50px;
    padding-top: 50px;
    display: flex;
    flex-direction: row;
  }

  .welcome-left {
    padding-left: 50px;
  }

  .welcome-right {
  }

  h1 {
    font-size: 50px;
    font-weight: bold;
  }

  h2 {
  }
`

const Subtitle = styled.div`
  font-size: 28px;
  margin-top: 20px;
  padding-right: 30px;
`

const Actions = styled.div`
  display: flex;
  flex-direction: row;
`

export const IndexPageTemplate = ({image, title, subheading, intro}) => {
  const IntroItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
  `

  const IntroItem = styled.div`
    border: 1px solid black;
    width: 40%;
    margin-right: 30px;
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
    h3 {
      color: #00afd7;
      font-size: 22px;
      font-weight: bold;
    }
  `

  const IntroItems = () => (
    <IntroItemsWrapper>
      {intro.blurbs.map((item, i) => {
        return (
          <IntroItem key={`intro-item-${i}`}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </IntroItem>
        )
      })}
    </IntroItemsWrapper>
  )

  return (
    <Welcome>
      <div className="welcome-top-section">
        <div className="welcome-left">
          <h1>{title}</h1>
          <Subtitle>
            {subheading} 
          </Subtitle>
        </div>
        <div className="welcome-right">
          <img src="/img/world.png" />
        </div>
      </div>
      <IntroItems />
    </Welcome>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        subheading
        intro {
          blurbs {
            text
            title
          }
        }
      }
    }
  }
`
