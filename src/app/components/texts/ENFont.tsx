import { Source_Code_Pro } from 'next/font/google'

const sourceCodeProFont = Source_Code_Pro({
    subsets: ['latin'],
    display: 'swap',
})

type TENFont = {
    children?: React.ReactNode | undefined | string,
    style?: React.CSSProperties
}

export default function ENFont(props: TENFont) {
    const { children, style } = props
    return (
        <span style={{ fontSize: 28, ...style }} className={sourceCodeProFont.className}>
            {children}
        </span>
    )
}