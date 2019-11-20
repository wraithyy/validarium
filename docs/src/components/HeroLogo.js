import React from 'react';
import styled from 'styled-components';

const HeroLogoWrapper = styled.svg`
	fill-rule: evenodd;
	clip-rule: evenodd;
	stroke-linecap: round;
	stroke-miterlimit: 1;

	.path {
		fill: #ff9292;
		fill-opacity: 0;
		stroke: #fff;
		stroke-width: 8px;
		stroke-dasharray: 0, 31;
		animation: offset 2.5s 1 cubic-bezier(0, 0, 0.2, 1) forwards;
	}

	.text path {
		fill: #fff;
	}

	@keyframes offset {
		from {
			stroke-dashoffset: -500;
			stroke-width: 1px;
			stroke-dasharray: 50, 0;
		}
	}

	@keyframes offset-text {
		from {
			stroke-dashoffset: -400;
		}
	}
`;

// TODO: text move to the plain HTML
/* eslint-disable max-len */
const HeroLogo = () => (
	<HeroLogoWrapper
		width="100%" height="100%" viewBox="0 0 180 200"
		xmlSpace="preserve"
	>
		<g id="Vrstva_3">
			<g>
				<path
					fill="none"
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					d="M74.238,93.21
			c-1.18-0.5-2.33-1.06-3.45-1.68L74.238,93.21z"
				/>
				<linearGradient
					id="SVGID_1_"
					gradientUnits="userSpaceOnUse"
					x1="83.5588"
					y1="94.2468"
					x2="124.5588"
					y2="57.7468"
				>
					<stop offset="0" style={{ 'stop-color': '#4586C5' }} />
					<stop offset="1" style={{ 'stop-color': '#2BB892' }} />
				</linearGradient>
				<path
					fill="url(#SVGID_1_)"
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					d="
			M185.328,5.44l-67.56,77.11l-1.53,1.75c-6.84,7.31-16.56,11.88-27.36,11.88c-5.19,0-10.14-1.06-14.64-2.97l-3.45-1.68l-0.04-0.02
			c-1.17-0.66-2.47-1.21-3.78-1.85l57.92-41.21L185.328,5.44z"
				/>

				<line
					fill="none"
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					x1="80.948"
					y1="124.59"
					x2="80.858"
					y2="124.69"
				/>

				<line
					fill="none"
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					x1="66.968"
					y1="89.66"
					x2="66.968"
					y2="89.66"
				/>
				<linearGradient
					id="SVGID_2_"
					gradientUnits="userSpaceOnUse"
					x1="32.4744"
					y1="59.7762"
					x2="80.7244"
					y2="99.5262"
				>
					<stop offset="0" style={{ 'stop-color': '#4586C5' }} />
					<stop offset="1" style={{ 'stop-color': '#2BB892' }} />
				</linearGradient>
				<path
					fill="url(#SVGID_2_)"
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					d="
			M116.238,84.3l-35.26,40.26l-0.03,0.03c-2.59,3.56-6.8,5.87-11.54,5.87c-4.76,0-8.97-2.32-11.57-5.9L5.668,59.75l61.3,29.91
			c1.31,0.64,2.61,1.19,3.78,1.85l0.04,0.02c1.12,0.62,2.27,1.18,3.45,1.68c4.5,1.91,9.45,2.97,14.64,2.97
			C99.678,96.18,109.398,91.61,116.238,84.3z"
				/>
				<path
					fill="#3399CD"
					d="M91.671,94.099c-5.19,0-10.14-1.06-14.64-2.97c-1.18-0.5-2.33-1.06-3.45-1.68l-0.04-0.02
			c-0.995-0.562-2.091-1.051-3.201-1.576l-2.426,1.726c1.31,0.64,2.61,1.19,3.78,1.85l0.04,0.02l3.45,1.68
			c4.5,1.91,9.45,2.97,14.64,2.97c10.8,0,19.473-5.195,26.313-12.505l0.962-1.1C110.318,89.273,102.017,94.099,91.671,94.099z"
				/>
			</g>
		</g>
		<g id="Vrstva_4">
			<rect
				x="12.498" y="137" fill="none"
				width="166" height="29"
			/>
			<text
				transform="matrix(1 0 0 1 12.4983 155.9998)"
				fontFamily="'OpenSans-ExtraBold'"
				fontSize="25"
			>
				VALIDARIUM
			</text>
		</g>
	</HeroLogoWrapper>
);

export default HeroLogo;
