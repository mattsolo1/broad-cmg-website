import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link, graphql} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'

const Welcome = styled.div`
  display: flex;
  flex-direction: row;

  .welcome-left {
    padding-left: 50px;
  }

  .welcome-right {
  }

  h1 {
    font-size: 50px;
  }

  h2 {
  }
`

const Actions = styled.div`
  display: flex;
  flex-direction: row;
`

export const IndexPageTemplate = ({image, title, subheading, intro}) => {
  console.log('hey', image.childImageSharp.fluid)
  return (
    <Welcome>
      <div className="welcome-left">
        <h1>{title}</h1>
      </div>
      <div className="welcome-right">
        <img src={image.childImageSharp.fluid.src} />
      </div>
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
