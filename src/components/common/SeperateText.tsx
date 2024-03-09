type Props = {
    text : string,
    breakSP? : boolean
}

function SeperateText({text, breakSP} : Props) {
    const stringArr = text.split("<br>");
    const newStringArr : string[][] = [];
    stringArr.forEach(elm => {
      const letterArr = elm.split("");
      newStringArr.push(letterArr);
    })

  return (
    <div className="seperateText">
        {newStringArr.map((elm, index) => (
             <div key={index} className="seperateText__block">
            {elm.map((letter, i) => (
                    letter !== " "? 
                    <span key={i} className="inline-block letter overflow-hidden">
                     <span className="letter__inner  inline-block">
                       {letter}
                     </span>
                     </span> : 
                   <span key={i} className="letter overflow-hidden pc:inline-block">
                   <span className="letter__inner">
                    {breakSP&&<br className="pc:hidden"/>}&nbsp;
                   </span>
                 </span> 
        
           ))}
           </div>
          ))
        }
    </div>
  );
}

export default SeperateText;
