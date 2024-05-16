import { logEvent } from "../services/amplitudeService"

const MyButton = () => {
  const handleClick = () => {
    logEvent('button-click', { 
      component: "MyButton" 
    });
  };

  return <button onClick={handleClick}>Clique em mim</button>
};

export default MyButton;