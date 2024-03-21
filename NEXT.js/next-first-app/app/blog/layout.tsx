export default function BlogLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		<div>
			<div style={{backgroundColor: "blue", height: "50px", width: "100%"}}>블로깅 공통 레이아웃 영역</div>
			{children}
		</div>
	);
}
