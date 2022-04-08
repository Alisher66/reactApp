import { useRef } from 'react';

function HideInput() {
  const ref = useRef(null);

  const show = () =>{
    ref.current.style.display = "block";
    ref.current.focus();
  }
  const hide = () =>{
    ref.current.style.display = "none";
  }
  return(
    <div>
       <button onClick={show}>show</button>
       <button onClick={hide}>hide</button>
       <input ref={ref} />
    </div>
  );
}

export default HideInput;