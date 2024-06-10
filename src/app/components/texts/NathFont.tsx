import localFont from 'next/font/local'

const myFont = localFont({
	src: '../../../../public/Nath.ttf',
	display: 'swap',
})

type TNathFont = {
	children?: React.ReactNode | undefined | string,
	style?: React.CSSProperties
}

export default function NathFont(props: TNathFont) {
	const { children, style } = props
	return (
		<span style={{ fontSize: 28, ...style }} className={myFont.className}>
			{children}
		</span>
	)
}