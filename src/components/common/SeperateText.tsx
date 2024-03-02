type Props = {
    text : string
}

function SeperateText({text} : Props) {
    
   const stringArray = text.split("");
   console.log(stringArray)

  return (
    <>
        {stringArray.map((elm, index) => (
           elm !== " "? 
           <span key={index} className="inline-block letter">
            <span className="letter__inner overflow-hidden">
              {elm}
            </span>
            </span> : 
          <span key={index} className="block letter">
          <span className="letter__inner">
          {elm}  
          </span>
        </span> 
        ))}
    </>
  );
}

export default SeperateText;
