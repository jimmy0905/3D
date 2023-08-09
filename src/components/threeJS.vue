<template>
    <p id="AX"> AX:</p>
    <p id="MaxAX">MaxAX:</p>
    <p id="AY"> AY:</p>
    <p id="MaxAY">MaxAY:</p>
    <p id="AZ"> AZ:</p>
    <p id="MaxAZ">MaxAZ:</p>
    <p id="Y/Z">Y/Z:</p>
</template>
<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import map from "@/assets/3D_Model/grand_theft_auto_san_andreas__grove_street.glb";
import pointer from "@/assets/3D_Model/map_pointer.glb";
export default {
  mounted() {
    //init scence
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xabcdef);
    //init camera
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    //init render
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //init loader
    var loader = new GLTFLoader();
    loadMap(map);
    loadPointer(pointer);
    // Add light
    var ambientLight = new THREE.AmbientLight(0xffffff); // Set the ambient light color and intensity
    scene.add(ambientLight);
    //adjust camera
    adjustCameraPosition();
    // initi PointerLockControls
    var controls = new PointerLockControls(camera, renderer.domElement);
    scene.add(controls.getObject());
    // Store the current state of the movement
    var movement = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      rotateLeft: false,
      rotateRight: false,
    };
    // Stroe the map Max and Min Constraint for Camera
    var mapConstraint = {
      minX: -100,
      minY: -100,
      minZ: -100,
      maxX: 100,
      maxY: 100,
      maxZ: 100,
    };
    // Init camera Collision
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = window.innerWidth / 2;
    mouse.y = window.innerHeight / 2;
    console.log(mouse);
    // Keydown event listener
    document.addEventListener("keydown", function (event) {
      handleKeyDown(event.code);
    });
    // Keyup event listener
    document.addEventListener("keyup", function (event) {
      handleKeyUp(event.code);
    });
    // Add the resize event listener
    window.addEventListener("resize", handleResize);
    // Add device Orientation Listener
    var initialAlpha = 0;
    var initialBeta = 0;
    var initialGamma = 0;
    window.addEventListener("deviceorientation", handleOrientation, false);
    // Add device Motion Listener
    var initialAccelerationX = 0;
    var initialAccelerationZ = 0;
    window.addEventListener("devicemotion", handleMotion, false);
    // Initialize the camera direction and rotation vectors
    var cameraDirection = new THREE.Vector3();
    //
    animate();
    function loadMap(mapModel) {
      loader.load(
        mapModel,
        function (gltf) {
          gltf.scene.scale.set(1, 1, 1); // Adjust the scale of the model
          gltf.scene.position.set(0, 0, 0); // Adjust the position of the model
          scene.add(gltf.scene);
          const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
          const boundingBoxHelper = new THREE.Box3Helper(boundingBox, 0xff0000);
          scene.add(boundingBoxHelper);
          const max = boundingBox.max;
          const min = boundingBox.min;
          mapConstraint.maxX = max.x;
          mapConstraint.maxY = max.y;
          mapConstraint.maxZ = max.z;
          mapConstraint.minX = min.x;
          mapConstraint.minY = min.y;
          mapConstraint.minZ = min.z;
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
    }
    function loadPointer(pointerModel) {
      loader.load(
        pointerModel,
        function (gltf) {
          gltf.scene.scale.set(1, 1, 1); // Adjust the scale of the model
          gltf.scene.position.set(44, 10, 0); // Adjust the position of the model
          scene.add(gltf.scene);
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
    }
    function adjustCameraPosition() {
      camera.position.x = 18;
      camera.position.y = 10;
      camera.position.z = 75;
    }
    function handleKeyDown(keyCode) {
      switch (keyCode) {
        case "KeyW":
          movement.forward = true;
          break;
        case "KeyS":
          movement.backward = true;
          break;
        case "KeyA":
          movement.left = true;
          break;
        case "KeyD":
          movement.right = true;
          break;
        case "KeyQ":
          movement.rotateLeft = true;
          break;
        case "KeyE":
          movement.rotateRight = true;
          break;
      }
    }
    function handleKeyUp(keyCode) {
      switch (keyCode) {
        case "KeyW":
          movement.forward = false;
          break;
        case "KeyS":
          movement.backward = false;
          break;
        case "KeyA":
          movement.left = false;
          break;
        case "KeyD":
          movement.right = false;
          break;
        case "KeyQ":
          movement.rotateLeft = false;
          break;
        case "KeyE":
          movement.rotateRight = false;
          break;
      }
    }
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mouse.x = window.innerWidth / 2;
      mouse.y = window.innerHeight / 2;
    }
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
    var MaxAX = 0;
    var MaxAZ = 0;
    var MaxAY = 0;
    function handleMotion(event) {
      // Adjust the acceleration values or apply additional transformations as needed
      // Update the camera's position based on device motion
      document.getElementById("AX").innerHTML = "AX:" + event.acceleration.x.toFixed(2);
      document.getElementById("AY").innerHTML = "AY:" + event.acceleration.y.toFixed(2);
      document.getElementById("AZ").innerHTML = "AZ:" + event.acceleration.z.toFixed(2);
      MaxAX = Math.max(MaxAX,event.acceleration.x.toFixed(2));
      MaxAY = Math.max(MaxAY,event.acceleration.y.toFixed(2));
      MaxAZ = Math.max(MaxAZ,event.acceleration.z.toFixed(2));
      document.getElementById("MaxAX").innerHTML = "MAXAX:" + MaxAX.toFixed(2);
      document.getElementById("MaxAY").innerHTML = "MAXAY:" + MaxAY.toFixed(2);
      document.getElementById("MaxAZ").innerHTML = "MAXAZ:" + MaxAZ.toFixed(2);
      document.getElementById("Y/Z").innerHTML = "Y/Z:" + event.acceleration.y.toFixed(2)/-event.acceleration.z.toFixed(2);
      //camera.position.x += accelerationX * 0.1;
      camera.position.z += -event.acceleration.y * 0.05;
    }
    function updateCameraPosition() {
      camera.position.x = Math.max(
        mapConstraint.minX,
        Math.min(mapConstraint.maxX, camera.position.x)
      );
      camera.position.y = Math.max(
        mapConstraint.minY,
        Math.min(mapConstraint.maxY, camera.position.y)
      );
      camera.position.z = Math.max(
        mapConstraint.minZ,
        Math.min(mapConstraint.maxZ, camera.position.z)
      );
    }
    function updateRaycaster() {
      // Update raycaster's origin and direction based on the camera's position and direction
      raycaster.setFromCamera(mouse, camera);
    }
    function performCollisionDetection() {
      // Update the raycaster
      updateRaycaster();

      // Perform intersection test
      const intersects = raycaster.intersectObjects(scene.children, true);
      var distanceThreshold = 30 ;
      // Handle collisions
      if (intersects.length > 0 && intersects[0].distance < distanceThreshold)  {
        // Collision detected
        // Take appropriate action, such as preventing camera movement or adjusting the camera's position
        // For example, you can set a new camera position away from the intersected object
        console.log(intersects[0]);
      }
    }
    function animate() {
      requestAnimationFrame(animate);

      // Manually update the camera position and rotation based on user input
      var moveSpeed = 0.1; // Adjust the movement speed as needed
      var rotateSpeed = 0.01; // Adjust the rotation speed as needed

      if (movement.forward) {
        camera.getWorldDirection(cameraDirection);
        controls
          .getObject()
          .position.add(cameraDirection.multiplyScalar(moveSpeed));
      }
      if (movement.backward) {
        camera.getWorldDirection(cameraDirection);
        controls
          .getObject()
          .position.add(cameraDirection.multiplyScalar(-moveSpeed));
      }
      if (movement.left) {
        camera.getWorldDirection(cameraDirection);
        controls
          .getObject()
          .position.add(
            cameraDirection
              .cross(new THREE.Vector3(0, 1, 0))
              .normalize()
              .multiplyScalar(-moveSpeed)
          );
      }
      if (movement.right) {
        camera.getWorldDirection(cameraDirection);
        controls
          .getObject()
          .position.add(
            cameraDirection
              .cross(new THREE.Vector3(0, 1, 0))
              .normalize()
              .multiplyScalar(moveSpeed)
          );
      }
      if (movement.rotateLeft) {
        controls.getObject().rotation.y += rotateSpeed;
      }
      if (movement.rotateRight) {
        controls.getObject().rotation.y -= rotateSpeed;
      }
      updateCameraPosition();
      performCollisionDetection();
      renderer.render(scene, camera);
    }
  },
};
</script>
