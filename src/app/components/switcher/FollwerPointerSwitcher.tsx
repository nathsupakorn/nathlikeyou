"use client"

import { useEffect, useState } from "react"
import { Switch } from "@nextui-org/react"
import { useContext } from 'react'
import { FollowerPointerContext } from "../../_contexts/FollowerPointerProvider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeLowVision, faEye } from '@fortawesome/free-solid-svg-icons'


export default function FollwerPointerSwitcher() {
    const [isChecked, setIsChecked] = useState<boolean | undefined>(false)
    const { hasFollower, setHasFollwer } = useContext(FollowerPointerContext)


    useEffect(() => {
        setIsChecked(hasFollower)
    }, [])

    return (
        <Switch
            isSelected={isChecked}
            color="default"
            thumbIcon={({ isSelected }) =>
                isSelected ?
                    <FontAwesomeIcon icon={faEye} color="#27272a" />
                    : <FontAwesomeIcon icon={faEyeLowVision} color="#27272a" />
            }
            onChange={() => {
                setIsChecked((val) => !val)
                setHasFollwer((val) => !val)
            }}
        >
        </Switch>
    )
};