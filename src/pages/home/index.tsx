import Layout from '@/layouts';

const HomePage = () => {
	return (
		<Layout activeKey="home">
			<h1 className="text-{32px} m-auto h-16 w-60 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text font-bold text-transparent">
				Home Page
			</h1>
		</Layout>
	);
};

export default HomePage;
