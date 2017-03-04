// This is not an impressive example of my javascript abilities, perhaps look at some other repos I contribute to for a better sense of my skill level.

// video autoplay

(function() {
  /**
   * Video element
   * @type {HTMLElement}
   */
  var video = document.getElementById("hero-vid");
  /**
   * Check if video can play, and play it
   */
  video.addEventListener( "canplay", function() {
    video.play();
  });
})();

// google analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-85786647-1', 'auto');
ga('send', 'pageview');

// granim.js
// var granimInstance = new Granim({
//     element: '#logo-canvas',
//     direction: 'left-right',
//     opacity: [1, 1],
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#EB3349', '#F45C43'],
//                 ['#FF8008', '#FFC837'],
//                 ['#4CB8C4', '#3CD3AD'],
//                 ['#24C6DC', '#514A9D'],
//                 ['#FF512F', '#DD2476'],
//                 ['#DA22FF', '#9733EE']
//             ],
//             transitionSpeed: 2000
//         }
//     }
// });
