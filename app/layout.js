import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
	title: 'Swimmer ♬',
	description: 'Swimmer - My music',
	keywords: 'swimmer,swimmer-zone,swimmerzone,zone,water,phlegmatic,music,techno,ambient,minimal,lounge,blog,weblog,template,html,css,menu,responsive,travel,travels,travelblog,tutorials,diy,yupsie',
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
			<body>
				{children}
				<Analytics/>
				<SpeedInsights/>
			</body>
		</html>
	)
}

export default RootLayout;
