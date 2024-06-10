import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, CardFooter } from '@nextui-org/react'
import { useRef, useState } from 'react'

export type TVideoSquare = {
    width: number
    height: number
    src: string
    description: string
}

export default function VideoSquare({
    width,
    height,
    src,
    description,
}: TVideoSquare) {
    const [isPause, setIsPause] = useState<boolean>(false)
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const setIframeAction = (vdoAction: string) => {
        iframeRef?.current?.contentWindow?.postMessage(
            `{"event":"command","func":"${vdoAction}","args":""}`,
            '*'
        )
    }

    const setPause = () => {
        setIframeAction('pauseVideo')
    }

    return (
        <Card isFooterBlurred radius="lg" className="border-none max-w-[200px]">
            <iframe
                ref={iframeRef}
                title="video"
                width={width}
                height={height}
                src={src + '?autoplay=1'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{description}</p>
                <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                    onClick={setPause}
                >
                    <FontAwesomeIcon icon={isPause ? faPlay : faPause}></FontAwesomeIcon>
                </Button>
            </CardFooter>
        </Card>
    )
}
