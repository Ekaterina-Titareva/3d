import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 8, 10);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const sphereGeometry = new THREE.SphereGeometry(2, 15, 15);
const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x0077ff,
    wireframe: true
});
const earth = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(earth);


const coneGeometry = new THREE.ConeGeometry(1, 2, 32); // радиус, высота, количество сегментов
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const dress = new THREE.Mesh(coneGeometry, coneMaterial);
dress.position.set(0, 4, 0);
scene.add(dress);


const smallSphereGeometry = new THREE.SphereGeometry(0.5, 15, 15);
const smallSphereMaterial = new THREE.MeshBasicMaterial({ color: 16764057 });
const head = new THREE.Mesh(smallSphereGeometry, smallSphereMaterial);
head.position.set(0, 5.2, 0);
scene.add(head);


const eyeGeometry = new THREE.SphereGeometry(0.1, 15, 15); // радиус, количество широтных сегментов, количество долготных сегментов
const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const eyeLeft = new THREE.Mesh(eyeGeometry, eyeMaterial);
eyeLeft.position.set(0.2, 5.3, 0.4);
eyeLeft.rotation.x = THREE.MathUtils.degToRad(90);
scene.add(eyeLeft);

const eyeRight = new THREE.Mesh(eyeGeometry, eyeMaterial);
eyeRight.position.set(-0.2, 5.3, 0.4);
eyeRight.rotation.x = THREE.MathUtils.degToRad(90);
scene.add(eyeRight);


const mouthGeometry = new THREE.CylinderGeometry(0.2, 0.1, 0.1, 32); // ширина, высота, глубина
const mouthMaterial = new THREE.MeshBasicMaterial({ color: 16711680 }); 
const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
mouth.position.set(0, 5.1, 0.38); 
mouth.rotation.x = THREE.MathUtils.degToRad(90); 
scene.add(mouth);


const cylinderGeometry1 = new THREE.CylinderGeometry(0.1, 0.15, 1, 32); // радиус, радиус, высота, количество сегментов
const cylinderGeometry2 = new THREE.CylinderGeometry(0.15, 0.1, 1, 32);
const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 16764057, transparent: true, opacity: 0.7 });

const rightHand = new THREE.Mesh(cylinderGeometry1, cylinderMaterial);
rightHand.position.set(-0.8, 4, 0);
rightHand.rotation.z = THREE.MathUtils.degToRad(100);
scene.add(rightHand);

const leftHand = new THREE.Mesh(cylinderGeometry2, cylinderMaterial);
leftHand.position.set(0.8, 4, 0);
leftHand.rotation.z = THREE.MathUtils.degToRad(80);
scene.add(leftHand);


const cylinderGeometry3 = new THREE.CylinderGeometry(0.22, 0.2, 1, 32);

const rightLeg = new THREE.Mesh(cylinderGeometry3, cylinderMaterial);
rightLeg.position.set(-0.3, 2.5, 0);
scene.add(rightLeg);
const leftLeg = new THREE.Mesh(cylinderGeometry3, cylinderMaterial);
leftLeg .position.set(0.3, 2.5, 0);
scene.add(leftLeg);


const controls = new OrbitControls(camera, renderer.domElement); //возможность вращать объекты

function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
}

animate();
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

