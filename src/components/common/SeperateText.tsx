type Props = {
    text : string
}

function SeperateText({text} : Props) {
    
   const stringArray = text.split("");

  return (
    <>
        {stringArray.map((elm, index) => (
           elm !== " "? 
           <span key={index} className="inline-block letter overflow-hidden">
            <span className="letter__inner  inline-block">
              {elm}
            </span>
            </span> : 
          <span key={index} className="block letter overflow-hidden">
          <span className="letter__inner">
          {elm}  
          </span>
        </span> 
        ))}
    </>
  );
}

export default SeperateText;
