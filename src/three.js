import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

// Check if the user is accessing from a mobile device(IOS)
function requestMotionAccess() {
	if (typeof DeviceMotionEvent.requestPermission === 'function') {
	  // For newer versions of Safari (iOS 13+)
	  DeviceMotionEvent.requestPermission()
		.then(permissionState => {
		  if (permissionState === 'granted') {
			// Motion access granted, you can now listen to DeviceMotionEvent
			window.addEventListener('devicemotion', handleMotion, true);
		  }
		})
		.catch(console.error);
	} else {
	  // For older versions of Safari
	  window.addEventListener('devicemotion', handleMotion, true);
	}
  
	if (typeof DeviceOrientationEvent.requestPermission === 'function') {
	  // For newer versions of Safari (iOS 13+)
	  DeviceOrientationEvent.requestPermission()
		.then(permissionState => {
		  if (permissionState === 'granted') {
			// Orientation access granted, you can now listen to DeviceOrientationEvent
			window.addEventListener('deviceorientation', handleOrientation, true);
		  }
		})
		.catch(console.error);
	} else {
	  // For older versions of Safari
	  window.addEventListener('deviceorientation', handleOrientation, true);
	}
  }
  requestMotionAccess();

// Initialize the 3D camera...
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xabcdef);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the 3D (GLB) model (building)
var loader = new GLTFLoader();
loader.load('src/3D_Model/grand_theft_auto_san_andreas__grove_street.glb', function (gltf) {
	gltf.scene.scale.set(0.1, 0.1, 0.1); // Adjust the scale of the model
	gltf.scene.position.set(0, 0, 0); // Adjust the position of the model
	scene.add(gltf.scene);
}, undefined, function (error) {
	console.error(error);
});
// Load the pointer
loader.load('src/3D_Model/map_pointer.glb', function (gltf2) {
	gltf2.scene.scale.set(0.1, 0.1, 0.1); // Adjust the scale of the model
	gltf2.scene.position.set(4.4, 1, 0); // Adjust the position of the model
	scene.add(gltf2.scene);
}, undefined, function (error) {
	console.error(error);
})

// Add light
var ambientLight = new THREE.AmbientLight(0xffffff); // Set the ambient light color and intensity
scene.add(ambientLight);

// Adjust the camera
camera.position.x = 1.8;
camera.position.y = 1.0;
camera.position.z = 7.5;

// PointerLockControls
var controls = new PointerLockControls(camera, renderer.domElement);
scene.add(controls.getObject());

// PointerLockControls event listeners
var havePointerLock =
	'pointerLockElement' in document ||
	'mozPointerLockElement' in document ||
	'webkitPointerLockElement' in document;

if (havePointerLock) {
	var element = document.body;
	var pointerlockchange = function (event) {
		if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
			controls.enabled = true;
		} else {
			controls.enabled = false;
		}
	};
	var pointerlockerror = function (event) {
		console.log('Pointer lock error.');
	};
	document.addEventListener('pointerlockchange', pointerlockchange, false);
	document.addEventListener('mozpointerlockchange', pointerlockchange, false);
	document.addEventListener('webkitpointerlockchange', pointerlockchange, false);
	document.addEventListener('pointerlockerror', pointerlockerror, false);
	document.addEventListener('mozpointerlockerror', pointerlockerror, false);
	document.addEventListener('webkitpointerlockerror', pointerlockerror, false);
	document.addEventListener('click', function (event) {
		element.requestPointerLock =
			element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
		if (/Firefox/i.test(navigator.userAgent)) {
			var fullscreenchange = function (event) {
				if (
					document.fullscreenElement === element ||
					document.mozFullscreenElement === element ||
					document.mozFullScreenElement === element
				) {
					document.removeEventListener('fullscreenchange', fullscreenchange);
					document.removeEventListener('mozfullscreenchange', fullscreenchange);
					element.requestPointerLock();
				}
			};
			document.addEventListener('fullscreenchange', fullscreenchange, false);
			document.addEventListener('mozfullscreenchange', fullscreenchange, false);
			element.requestFullscreen =
				element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
			element.requestFullscreen();
		} else {
			element.requestPointerLock();
		}
	});
} else {
	console.log('Your browser does not support Pointer Lock API.');
}

// Store the current state of the movement
var movement = {
	forward: false,
	backward: false,
	left: false,
	right: false,
	rotateLeft: false,
	rotateRight: false
};

// Keydown event listener
document.addEventListener('keydown', function (event) {
	handleKeyDown(event.code);
});

// Keyup event listener
document.addEventListener('keyup', function (event) {
	handleKeyUp(event.code);
});

function handleKeyDown(keyCode) {
	switch (keyCode) {
		case 'KeyW':
			movement.forward = true;
			break;
		case 'KeyS':
			movement.backward = true;
			break;
		case 'KeyA':
			movement.left = true;
			break;
		case 'KeyD':
			movement.right = true;
			break;
		case 'KeyQ':
			movement.rotateLeft = true;
			break;
		case 'KeyE':
			movement.rotateRight =true;
			break;
	}
}

function handleKeyUp(keyCode) {
	switch (keyCode) {
		case 'KeyW':
			movement.forward = false;
			break;
		case 'KeyS':
			movement.backward = false;
			break;
		case 'KeyA':
			movement.left = false;
			break;
		case 'KeyD':
			movement.right = false;
			break;
		case 'KeyQ':
			movement.rotateLeft = false;
			break;
		case 'KeyE':
			movement.rotateRight = false;
			break;
	}
}

// Add the resize event listener
window.addEventListener('resize', handleResize);

function handleResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

//mobile view
var initialAlpha = 0;
var initialBeta = 0;
var initialGamma = 0;

window.addEventListener('deviceorientation', handleOrientation, true);
function handleOrientation(event) {
    if (initialAlpha === 0 && initialBeta === 0 && initialGamma === 0) {
        initialAlpha = event.alpha || 0;
        initialBeta = event.beta || 0;
        initialGamma = event.gamma || 0;
    }

    // Calculate the rotation values based on the initial rotation angles
    var alpha = (event.alpha || 0) - initialAlpha;
    var beta = (event.beta || 0) - initialBeta;
    var gamma = (event.gamma || 0) - initialGamma;

    // Convert rotation values to radians
    alpha = THREE.MathUtils.degToRad(alpha);
    beta = THREE.MathUtils.degToRad(beta);
    gamma = THREE.MathUtils.degToRad(gamma);

    // Update the camera's rotation based on device orientation
    camera.rotation.set(beta, alpha, -gamma);
}
var initialAccelerationX = 0;
var initialAccelerationY = 0;
var initialAccelerationZ = 0;
window.addEventListener('devicemotion', handleMotion, true);

function handleMotion(event) {
    if (initialAccelerationX === 0 && initialAccelerationY === 0 && initialAccelerationZ === 0) {
        initialAccelerationX = event.accelerationIncludingGravity.x || 0;
        initialAccelerationY = event.accelerationIncludingGravity.y || 0;
        initialAccelerationZ = event.accelerationIncludingGravity.z || 0;
    }

    // Calculate the acceleration values based on the initial acceleration values
    var accelerationX = (event.accelerationIncludingGravity.x || 0) - initialAccelerationX;
    var accelerationY = (event.accelerationIncludingGravity.y || 0) - initialAccelerationY;
    var accelerationZ = (event.accelerationIncludingGravity.z || 0) - initialAccelerationZ;

    // Adjust the acceleration values or apply additional transformations as needed
    // For example, you can invert or scale the acceleration values to control the camera movement speed

    // Update the camera's position based on device motion
    camera.position.x += accelerationX;
    camera.position.y += accelerationY;
    camera.position.z += accelerationZ;
}
// Initialize the camera direction and rotation vectors
var cameraDirection = new THREE.Vector3();

function animate() {
	requestAnimationFrame(animate);

	// Manually update the camera position and rotation based on user input
	var moveSpeed = 0.01; // Adjust the movement speed as needed
	var rotateSpeed = 0.01; // Adjust the rotation speed as needed

	if (movement.forward) {
		camera.getWorldDirection(cameraDirection);
		controls.getObject().position.add(cameraDirection.multiplyScalar(moveSpeed));
	}
	if (movement.backward) {
		camera.getWorldDirection(cameraDirection);
		controls.getObject().position.add(cameraDirection.multiplyScalar(-moveSpeed));
	}
	if (movement.left) {
		camera.getWorldDirection(cameraDirection);
		controls.getObject().position.add(cameraDirection.cross(new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(-moveSpeed));
	}
	if (movement.right) {
		camera.getWorldDirection(cameraDirection);
		controls.getObject().position.add(cameraDirection.cross(new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(moveSpeed));
	}
	if (movement.rotateLeft) {
		controls.getObject().rotation.y += rotateSpeed;
	}
	if (movement.rotateRight) {
		controls.getObject().rotation.y -= rotateSpeed;
	}
	//console.log("x:" + camera.position.x)
	//console.log("y:" + camera.position.y)
	//console.log("z:" + camera.position.z)
	renderer.render(scene, camera);
}
animate();