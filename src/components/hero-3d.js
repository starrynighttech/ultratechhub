const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5);

const canvas = document.getElementById("hero-3d");
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
const spotLight = new THREE.SpotLight(0x00eaff, 1);
spotLight.position.set(5,5,5);
scene.add(spotLight);

// Phone placeholder
const geometry = new THREE.BoxGeometry(1, 2, 0.1);
const material = new THREE.MeshStandardMaterial({ color: 0x001f3f, metalness:0.5, roughness:0.2 });
const phone = new THREE.Mesh(geometry, material);
scene.add(phone);

// Orbiting ring
const ringGeo = new THREE.TorusGeometry(1.3, 0.02, 16, 100);
const ringMat = new THREE.MeshStandardMaterial({ color: 0x00eaff, emissive: 0x00eaff, emissiveIntensity: 1 });
const ring = new THREE.Mesh(ringGeo, ringMat);
scene.add(ring);

// Smoke particles
const particleGeo = new THREE.SphereGeometry(0.03,8,8);
const particleMat = new THREE.MeshStandardMaterial({ color: 0x00eaff, transparent:true, opacity:0.5 });
const particles = [];
for(let i=0;i<60;i++){
  let p = new THREE.Mesh(particleGeo, particleMat);
  p.position.set((Math.random()-0.5)*3, Math.random()*2-1, (Math.random()-0.5)*3);
  scene.add(p);
  particles.push(p);
}

// Animate
function animate(){
  requestAnimationFrame(animate);
  ring.rotation.y += 0.01;
  phone.rotation.y = Math.sin(Date.now()*0.001)*0.2;
  particles.forEach(p=>{
    p.position.y += 0.002;
    if(p.position.y > 1) p.position.y = -1;
  });
  renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener('resize', ()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});