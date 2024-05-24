import Layout from '@/layouts';
import DemoComp from 'comps/demoComp';

const AboutPage = () => {
	return (
		<Layout activeKey="about">
			<h1
				className="text-{32px} m-auto h-14 w-60 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text font-bold text-transparent"
				border="cyan-600 solid width-$1"
			>
				About Page
			</h1>
			<DemoComp />
		</Layout>
	);
};

export default AboutPage;
