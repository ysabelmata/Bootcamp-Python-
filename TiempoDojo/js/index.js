
function despAlert( element ) {
    alert( "Loading weather report! ..." );
}

function aceptCookie ( element ) {
    let cookieContainer= element.closest( ".cookie" );
    cookieContainer.remove();
}

function changeMetric ( element ) {
    let temperatures= document.querySelectorAll( ".max, .min" );
       for( let i = 0; i< temperatures.length; i++){
        let currentTemp= Number( temperatures[1].textContent );
        console.log( currentTemp);
        if ( element.value === "celsius") {
            let celsiusResult = ( currentTemp - 32 ) / 1.8;
            temperatures[i].textContent = parseInt( celsiusResult);
       } 
         else{
            let farenheitResult= ( 9 / 5 ) * currentTemp + 32;
            temperatures[i].textContent =parseInt( farenheitResult);
         }
   }
}
 