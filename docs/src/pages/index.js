import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import HeroLogo from '../components/HeroLogo';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Seo from '../components/Seo';
import config from '../../siteConfig';

const IndexHeadContainer = styled.div`
	background: ${props => props.theme.brand};
	padding: ${props => props.theme.sitePadding};
	text-align: center;
`;

const Hero = styled.div`
	padding: 50px 0;
	color: ${props => props.theme.lightGrey};
	& > h1 {
		font-weight: 400;
	}
`;

const BodyContainer = styled.div`
	padding: ${props => props.theme.sitePadding};
	max-width: ${props => props.theme.contentWidthLaptop};
	margin: 0 auto;

	.contributors {
		max-width: 400px;
		margin: 100px auto 0;
	}
`;

const Perex = styled.h4`
	margin-top: 0;
	letter-spacing: 12px;
	font-weight: 200 !important;
`;

const HeroLogoWrapper = styled.section`
	width: 450px;
	margin: 0 auto;
`;

// TODO: add examples
//				<Box>What next?</Box>
//				<LandingExample examples={data.examples} exampleId="example1" />
//				<LandingExample examples={data.examples} exampleId="example2" />
//				<LandingExample examples={data.examples} exampleId="example3" />

const Index = () => (
	<div className="index-container">
		<Helmet title={config.title} />
		<Seo ogUrl="index.html" />
		<main>
			<IndexHeadContainer>
				<Navigation />
				<Hero>
					<HeroLogoWrapper>
						<HeroLogo />
					</HeroLogoWrapper>
					<Perex>Agnostic validation library for JavaScript</Perex>
					<Link to="/validarium-introduction">
						<Button dark>Get started →</Button>
					</Link>
				</Hero>
			</IndexHeadContainer>
			<BodyContainer />
			<Footer />
		</main>
	</div>
);

export default Index;

Index.propTypes = {
	data: PropTypes.object,
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
	query IndexQuery {
		allMarkdown: allMarkdownRemark(limit: 2000) {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					timeToRead
					frontmatter {
						title
					}
				}
			}
		}
		examples: allMarkdownRemark(filter: { id: { regex: "/landingPage/" } }) {
			edges {
				node {
					fields {
						slug
					}
					html
				}
			}
		}
	}
`;
