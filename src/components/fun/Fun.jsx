import { useState, useEffect } from "react"
const Fun = () => {
    let maxX = window.screen.availWidth - 100
    let maxY = window.screen.availHeight - 175
    const [translate, setTranslate] = useState({
        x: 200,
        y: 200
    })

    const [up, setUp] = useState({
        x: true,
        y: true
    })

    const [style, setStyle] = useState({
        transform: "translate(0px, 0px)"
    })

    const directionX = (current) => {
        if(translate.x >= maxX){
            setUp({
                ...up,
                x: false
            })
            return current
        }
        if(translate.x < 0){
            setUp({
                ...up,
                x: true
            })
            return current
        }
        return current
    }

    const directionY = (current) => {
        if(translate.y >= maxY){
            setUp({
                ...up,
                y: false
            })
            return current
        }
        if(translate.y < 0){
            setUp({
                ...up,
                y: true
            })
            return current
        }
        return current
    }

    useEffect(() => {
        const interval = setInterval(() => {
        setTranslate({
            x: up.x ? directionX(translate.x + 1) : directionX(translate.x - 1),
            y: up.y ? directionY(translate.y + 1) : directionY(translate.y - 1),
        })
        setStyle({
            transform: `translate(${translate.x}px, ${translate.y}px)`
        })
        }, 10)
        return () => clearInterval(interval)
      })

    return(
        <>
        <div style={style} className="ball">
            <div className="light"></div>
        </div>
        <div className="shadow"></div>
        </>
    )
}

export default Fun