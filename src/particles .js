particlesJS("particles-js", {
particles: {
number: { value: 50 }, // fewer particles
color: { value: "#00eaff" },
shape: { type: "circle" },
opacity: { value: 0.25, random: true },
size: { value: 3, random: true },
line_linked: { enable: false },
move: { enable: true, speed: 1, direction: "none", out_mode: "out" }
},
interactivity: {
detect_on: "canvas",
events: { onhover: { enable: true, mode: "repulse" } }
},
retina_detect: true
});