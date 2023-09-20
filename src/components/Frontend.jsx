import React, { useEffect } from 'react';

export default function Frontend() {
  useEffect(() => {
    const text = document.querySelector(".sec-text");
    const textLoad = () => {
      setTimeout(() => {
        text.textContent = "Front-end Developer";
      }, 0);
      setTimeout(() => {
        text.textContent = "Burgerflipper";
      }, 4000);
      setTimeout(() => {
        text.textContent = "Popstjerne";
      }, 8000); // 1s = 1000 milliseconds
    };

    textLoad();
    const intervalId = setInterval(textLoad, 12000);

    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div class="container">
        <span class="text sec-text">Frontend</span>
    </div>
  )

}