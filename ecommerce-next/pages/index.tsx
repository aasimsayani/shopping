import { useEffect } from "react"
import play from "../examples/playground"

export default function Home() {
    const message: string = "hello world"

    useEffect(() => {
        play()
    }, [])

    return (
        <div>{message}</div>
    )

}