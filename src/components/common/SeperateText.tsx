type Props = {
    text : string
}

function SeperateText({text} : Props) {
    
   const stringArray = text.split("");
   console.log(stringArray)

  return (
    <>
        {stringArray.map((elm, index) => (
           elm!= " "? 
           <span key={index} className="inline-block">
                {elm}
                
            </span> : 
         <span key={index} className="block">
         {elm}    
        </span> 
        ))}
    </>
  );
}

export default SeperateText;
