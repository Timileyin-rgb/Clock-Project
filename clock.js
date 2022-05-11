 setInterval(setClock, 1000)

 const hourHand = document.querySelector('.hour-hand')
 const minHand = document.querySelector('.min-hand')
 const secHand = document.querySelector('.sec-hand')


 function setClock(){
   const currentDate = new Date()
   const secondsRation = currentDate.getSeconds() / 60
   const minRation = (secondsRation + currentDate.getMinutes()) / 60
   const hourRation = (minRation + currentDate.getHours()) / 12
  setRotaion(secHand, secondsRation)
  setRotaion(minHand, minRation)
  setRotaion(hourHand, hourRation)

 }

 function setRotaion(element, rotationRatio){
   element.style.setProperty('--rotation', rotationRatio * 360)
 }

 setClock();