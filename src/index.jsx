import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx'
// import { animateHTML } from './components/FadeInOnView.jsx'

// setInterval(console.clear, 100);

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

// when things with class hidden are in view, fade them in (used for Schedules)
//animateHTML().init();

// proportionally scale the element with the id very-specific-design on window size change
// var $el = ("#very-specific-design");
// console.log($el)
// if($el != undefined && $el != null) {
//     var elHeight = $el && $el.outerHeight();
//     var elWidth = $el && $el.outerWidth();

//     (document).ready(function() {

//         // this function is called when the browser window is resized
//         // calculates new heigt and width based on the new screen dimensions
//     (window).resize(function(){
//         var RSw = window.innerWidth * .97; // resized width
//         var RSh = window.innerHeight * .97; // resized height
        
//         //    // Limit $el to max size
//         //    var MAXw = 600;
//         //    var MAXh = 300;
//         //    if (RSw >= MAXw){RSw = MAXw;}
//         //    if (RSh >= MAXh){RSh = MAXh;}
        
//         // now you resize the $el with the new values
//         var scale = Math.min(
//                 RSw / elWidth,    
//                 RSh / elHeight
//             );
            
//         // $el && $el.css({
//         //     transform: "scale(" + scale + ")"
//         // });
//         console.log($el)
//         $el[0].style.setProperty('--schedule-scale', scale);
//     })});
// }