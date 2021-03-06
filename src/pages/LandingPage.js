/**
 * Landing Page
 * - Loads all the required components
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line
import VideoComponent from '../components/VideoComponent';
import CodeComponent from '../components/CodeComponent';
import GraphicComponent from '../components/GraphicComponent';
import Features from '../components/Features';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

/* Exports -------------------------------------------------------------------*/

export default function LandingPage() {
	return (
		<div>
			<Nav />
			<VideoComponent />
			<Features />
			<GraphicComponent />
			<CodeComponent />
			<Footer />
		</div>
	);
}
