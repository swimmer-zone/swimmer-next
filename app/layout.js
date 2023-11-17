export const metadata = {
	title: 'Swimmer ♬',
	description: 'Swimmer - My music',
	keywords: 'swimmer,swimmer-zone,swimmerzone,zone,water,phlegmatic,music,techno,ambient,minimal,lounge,blog,weblog,template,html,css,menu,responsive,mobile-friendly,yupsie',
	author: 'Swimmer'
}

export const viewport = {
	colorScheme: 'light',
	themeColor: '#6a6eec',
	width: 'device-width',
	initialScale: 1,
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}

export default RootLayout;
