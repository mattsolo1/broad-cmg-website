import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 300px;
  background-color: #e7e8e8;
  padding: 40px 80px 40px 80px;
`

const FooterSection = styled.ul`
  h2 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
  }
`

const Footer = ({ sections  }) => {
  return (
    <FooterWrapper>
      <FooterSection>
        <h2>Overview</h2>
        <li>Benefits</li>
        <li>Workflow Turnaround</li>
        <li>Disease Areas of Focus</li>
        <li></li>
      </FooterSection>
      <FooterSection>
        <h2>Workflow</h2>
        <li>Case Review</li>
        <li>Sample & Data Submission</li>
        <li>Phenotype Submission</li>
        <li>Sequencing & Reprocessing</li>
        <li>Data Transfer</li>
        <li>Analysis</li>
        <li>Data Sharing</li>
        <li>Publications</li>
      </FooterSection>
      <FooterSection>
        <h2>About</h2>
        <li>Meet Our Team</li>
      </FooterSection>
      <FooterSection>
        <h2>Events</h2>
        <li>Course Offering</li>
      </FooterSection>
    </FooterWrapper>
  )
}


export default Footer

