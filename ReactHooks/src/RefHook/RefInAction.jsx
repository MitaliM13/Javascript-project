import { useRef } from "react";

const RefInAction = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Mitali";
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus and write my name</button>
    </div>
  );
};

export default RefInAction;
