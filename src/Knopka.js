import React, { useState } from 'react';
import Button from './Button';
   const App = () => {
       const [showNotification, setShowNotification] = useState(false);
   
       const handleButtonClick = () => {
           // Логика для обработки нажатия кнопки
           setShowNotification(true);
           setTimeout(() => {
               setShowNotification(false);
           }, 3000); // Уведомление исчезнет через 3 секунды
       };
   
       return (
           <div>
               <button onClick={handleButtonClick}>Тыкни по мне!</button>
               {showNotification && <div>Браво, Вы ткнули по кнопке!</div>}
           </div>
       );
   };
   
   export default App;
   