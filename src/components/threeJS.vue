<template>
  <div style="
      position: absolute;
      z-index: 100;
      background-color: white;
      opacity: 0.5;
    ">
    <p id="AX" style="color: black; background-color: white">AX:</p>
    <p id="AY" style="color: black; background-color: white">AY:</p>
    <p id="AZ" style="color: black; background-color: white">AZ:</p>
    <p id="camera" style="color: black; background-color: white">X: Y: Z:</p>
    <p id="accDiff" style="color: black; background-color: white">accDiff:</p>
    <p id="Step" style="color: black; background-color: white">Step:</p>
  </div>
  <div style="
      position: absolute;
      z-index: 100;
      bottom: 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 50px;
    ">
    <button>left</button>
    <button id="forward">↑</button>
    <button>right</button>
    <button>←</button>
    <button>↓</button>
    <button>→</button>
  </div>
</template>
<script>
import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import map from "@/assets/3D_Model/warehouse.glb";
import shelf from "@/assets/3D_Model/shelf.glb";
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
      1000
    );
    //init render
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //init loader
    var loader = new GLTFLoader();
    loadMap(map);
    //loadPointer(pointer);
    loadShelf();
    // Add light
    var ambientLight = new THREE.AmbientLight(0xffffff); // Set the ambient light color and intensity
    scene.add(ambientLight);
    //adjust camera
    var initialY = 5;
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

    window.addEventListener("devicemotion", handleMotion, false);
    // Initialize the camera direction and rotation vectors
    var cameraDirection = new THREE.Vector3();
    // Add Click Evenet on 3D canvas to detect 3D object
    document
      .querySelectorAll("canvas")[0]
      .addEventListener("click", (event) => handleClickOnObject(event));
    //drawing Line
    //drawLine();
    // step counting
    let previousAcc = null;
    let stepCount = 0;
    //adding move buttin Listener
    let forwardAnimation;

    function startForwardAnimation() {
      forwardAnimation = requestAnimationFrame(moveForward);
    }

    function stopForwardAnimation() {
      cancelAnimationFrame(forwardAnimation);
    }
    document
      .getElementById("forward")
      .addEventListener("mouseover", startForwardAnimation);
    document
      .getElementById("forward")
      .addEventListener("mouseout", stopForwardAnimation);
    animate();
    function moveForward() {
      forwardAnimation = requestAnimationFrame(moveForward);

      // Move camera forward
      camera.getWorldDirection(cameraDirection);
      controls.getObject().position.add(cameraDirection.multiplyScalar(0.1));
    }
    function getMagnitude(acc) {
      const { x, y, z } = acc;
      return Math.sqrt(x * x + y * y + z * z);
    }
    function loadMap(mapModel) {
      loader.load(
        mapModel,
        function (gltf) {
          gltf.scene.scale.set(1, 1, 1); // Adjust the scale of the model
          gltf.scene.position.set(0, 0, 0); // Adjust the position of the model
          gltf.scene.name = "Map";
          scene.add(gltf.scene);
          console.log(gltf.scene);
          const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
          const max = boundingBox.max;
          const min = boundingBox.min;
          mapConstraint.maxX = max.x - 0.2;
          mapConstraint.maxY = max.y;
          mapConstraint.maxZ = max.z - 0.2;
          mapConstraint.minX = min.x + 0.2;
          mapConstraint.minY = min.y;
          mapConstraint.minZ = min.z + 0.2;
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
          console.log(gltf.scene);
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
    }
    function loadShelf() {
      loader.load(
        shelf,
        function (gltf) {
          gltf.scene.scale.set(1, 1, 1); // Adjust the scale of the model
          gltf.scene.position.set(-25, 0, 0); // Adjust the position of the model
          gltf.scene.name = "Shelf" + 1;
          scene.add(gltf.scene);
          console.log(gltf.scene);
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
    }
    function adjustCameraPosition() {
      camera.position.x = 0;
      camera.position.y = initialY;
      camera.position.z = 0;
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
    function handleMotion(event) {
      const activeThreshold = 1;
      const stepThreshold = 0.3;
      if (
        Math.abs(event.acceleration.x) < activeThreshold &&
        Math.abs(event.acceleration.x) < activeThreshold &&
        Math.abs(event.acceleration.x) < activeThreshold
      ) {
        return;
      }
      // Adjust the acceleration values or apply additional transformations as needed
      // Update the camera's position based on device motion
      document.getElementById("AX").innerHTML = "AX:" + event.acceleration.x;
      document.getElementById("AY").innerHTML = "AY:" + event.acceleration.y;
      document.getElementById("AZ").innerHTML = "AZ:" + event.acceleration.z;
      // update camera's positoin based on acceleration values
      document.getElementById("camera").innerHTML =
        "X:" +
        camera.position.x +
        "\nY:" +
        camera.position.y +
        "\nZ:" +
        camera.position.z;
      //
      const acc = event.accelerationIncludingGravity;

      // Ignore null or undefined values
      if (!acc) return;

      // Calculate the magnitude of the current acceleration
      const currentAcc = getMagnitude(acc);

      // If previous acceleration data exists, compare with current acceleration
      if (previousAcc) {
        // Calculate the difference in acceleration
        const accDiff = Math.abs(currentAcc - previousAcc);
        document.getElementById("accDiff").innerHTML = "accDiff:" + accDiff;
        // Check if the difference exceeds the threshold
        if (accDiff > stepThreshold) {
          // Increment step count
          stepCount++;
          document.getElementById("Step").innerHTML = "Step" + stepCount;
          camera.getWorldDirection(cameraDirection);
          controls
            .getObject()
            .position.add(cameraDirection.multiplyScalar(0.01));
        }
      }

      // Update previous acceleration
      previousAcc = currentAcc;
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
      var distanceThreshold = 100;
      // Handle collisions
      if (intersects.length > 0 && intersects[0].distance < distanceThreshold) {
        console.log(intersects);
        for (var i = 0; i < intersects.length; i++) {
          var intersect = intersects[i];
          var topObject = findTopParent(intersect.object);
          console.log(topObject.name);
          break;
        }
      }
    }
    function findTopParent(object) {
      let topParent = object;

      while (topParent.parent.name !== '') {
        topParent = topParent.parent;
      }
      return topParent;
    }
    function handleClickOnObject(event) {
      //console.log(mapObject.children[0].children[0].name);
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      performCollisionDetection();
    }
    function drawLine() {
      const points = [0, 7, 0, 0, 7, 10, 44, 7, 0];
      // points.push(new THREE.Vector3(0, 7, 0));
      // points.push(new THREE.Vector3(0, 7, 10));
      // points.push(new THREE.Vector3(44, 7, 0));
      var gemotry = new LineGeometry();
      gemotry.setPositions(points);
      var material = new LineMaterial({
        color: 0xdd2222,
        linewidth: 2,
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
      });
      var line = new Line2(gemotry, material);
      scene.add(line);
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
      //performCollisionDetection();
      renderer.render(scene, camera);
    }
  },
};
</script>
