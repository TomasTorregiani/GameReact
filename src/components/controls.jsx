import { useEffect, useState } from "react"

export const Controls = () => {

    const [button, setButton] = useState()

    return(
        <>
            <div id="controls">
                <button id="button1">Go to store</button>
                <button id="button2">Go to cave</button>
                <button id="button3">Fight dragon</button>
            </div>
        </>
    )
}