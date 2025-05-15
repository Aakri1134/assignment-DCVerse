import { useState, useEffect, useRef } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const Header = ({ className = "" }) => {
	const context = useGlobalContext()

  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
  const phrases = [
    `Welcome back, ${context.username}!!`,
    "Ready to continue?",
		 "AI Dashboard"
  ]
  
  useEffect(() => {
    const ticker = setTimeout(() => {
			tick() 
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [displayText, isDeleting]);

  const tick = () => {
    const i = loopNum;
    const fullText = phrases[i];

    setDisplayText(isDeleting 
      ? fullText.substring(0, displayText.length - 1) 
      : fullText.substring(0, displayText.length + 1)
    );

    if (!isDeleting && displayText === fullText) {
      setTypingSpeed(2000);
      setIsDeleting(true);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLoopNum((loopNum + 1 < phrases.length - 1)? loopNum + 1 : phrases.length - 1);
      setTypingSpeed(150);
    } else {
      setTypingSpeed(isDeleting ? 50 : 150);
    }
  };
  return (
    <div className={` flex items-center bg-secondaryBackgroundColor h-full min-h-32 max-h-[15dvh] ${className}`}>
      <h1 className=" font-mono text-4xl text-textColor font-bold md:pl-16 pl-4 pt-2 pb-2">{displayText}<span className="border-r-4 border-textColor ml-1 animate-pulse"/></h1>
    </div>
  )
}

export default Header
