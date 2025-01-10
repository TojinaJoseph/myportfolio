import React, { useEffect, useState } from "react"
import "./Typewritter.css";
 
interface TypewritterProps{
    text: string;
    speed?: number;
}
 
const Typewritter: React.FC<TypewritterProps>  = ({text, speed = 100}) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
 
    useEffect(() => {
        if (index < text.length){
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);
 
    return(
        <div className="typeWritter">
            <span>{displayText}</span>
            <span className="cursor">|</span>
        </div>
    );
};
 
export default Typewritter;