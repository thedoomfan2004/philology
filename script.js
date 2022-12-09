gsap.to('.teachers-slider', {
  x: -600,
  duration: 200
})

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );


var gridWidth = 172;
var gridHeight = 100;
Draggable.create(".teachers-slider", {
    type:"x",
    edgeResistance:0,
    bounds:".teachers",
    lockAxis:true,
    inertia: false,
    snap: {
        x: function(endValue) {
            return Math.round(endValue / gridWidth) * gridWidth;
        },
        y: function(endValue) {
            return Math.round(endValue / gridHeight) * gridHeight;
        }
    }
});

// gsap.to('.navbar', {
//     scrollTrigger: {
//         pin: true,
//         trigger: '.navbar',
//         markers: true,
//         start: 'top top',
//         end: `${height} top`,
//         scrub: true,
//     }
// })

