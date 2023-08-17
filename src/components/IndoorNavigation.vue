<template>
    <div class="InputSection">

        <div class="Selection">
            <label for="sPoint">Start Point</label>
            <select v-model="startPoint" id="sPoint" @change="changeStartPoint($event.target.selectedIndex)">
                <option v-for="point in points" :value="point.name" :key="point.name">{{ point.name }}</option>
            </select>
        </div>

        <div class="Selection">
            <label for="dPoint">End Point</label>
            <select v-model="destinationPoint" id="dPoint" @change="changeDestinationPoint($event.target.selectedIndex)">
                <option v-for="point in points" :value="point.name" :key="point.name">{{ point.name }}</option>
            </select>
        </div>
    </div>
    <div style="
      position: absolute;
      z-index: 100;
      background-color: white;
      opacity: 0.5;
      bottom: 0;
    ">
        <p id="AX" style="color: black; background-color: white">AX:</p>
        <p id="AY" style="color: black; background-color: white">AY:</p>
        <p id="AZ" style="color: black; background-color: white">AZ:</p>
        <p id="camera" style="color: black; background-color: white">X: Y: Z:</p>
        <p id="accDiff" style="color: black; background-color: white">accDiff:</p>
        <p id="Step" style="color: black; background-color: white">Step:</p>
    </div>
</template>
  
<style>
.InputSection {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.Selection {
    background-color: #094fA3;
    width: 40vw;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    border-radius: 5px;
}

label {
    color: white;
}

select {
    width: 45%;
}
</style>
  
<script>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import map from "@/assets/3D_Model/warehouse.glb";
import shelfModel from "@/assets/3D_Model/shelf.glb";
import pointer from "@/assets/3D_Model/map_pointer.glb";
var scene = new THREE.Scene();
var pointerObject = null;
export default {
    data() {
        return {
            points: [],
            shelfs: [],
            path: [],
            startPoint: null,
            startPointSelectedIndex: null,
            destinationPoint: null,
            destinationPointSelectedIndex: null,

            camera: new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            ),
            renderer: new THREE.WebGLRenderer(),
            ambientLight: new THREE.AmbientLight(0xffffff),
            loader: new GLTFLoader(),
            controls: null,
            cameraDirection: new THREE.Vector3(),
            mapConstraint: {
                minX: -100,
                minY: -100,
                minZ: -100,
                maxX: 100,
                maxY: 100,
                maxZ: 100,
            },
            movement: {
                forward: false,
                backward: false,
                left: false,
                right: false,
                rotateLeft: false,
                rotateRight: false,
            },
            orientation: {
                initialAlpha: 0,
                initialBeta: 0,
                initialGamma: 0
            }
            ,
            motion: {
                previousAcc: null,
                stepCount: 0,
                forwardAnimation: null
            }
            ,
            raycaster: new THREE.Raycaster(),
            mouse: new THREE.Vector2(),
            cameraDirection: new THREE.Vector3(),
        };
    },
    mounted() {
        this.fetchJSONFile();
    },
    methods: {
        async fetchJSONFile() {
            try {
                const response = await fetch("https://jimmy0905.github.io/jsonData/A.json");
                const data = await response.json();
                this.points = data.points;
                this.shelfs = data.shelfs;
                this.path = data.path;
                this.startPoint = this.points[0].name;
                this.startPointSelectedIndex = 0;
                this.destinationPoint = this.points[1].name;
                this.destinationPointSelectedIndex = 1;
                this.init3D();
                this.initLisnter();
                this.animate();
            } catch (error) {
                console.log(error);
            }
        },
        changeStartPoint(index) {
            this.startPointSelectedIndex = index
            this.setCameraPosition(
                this.points[this.startPointSelectedIndex].x,
                this.points[this.startPointSelectedIndex].y,
                this.points[this.startPointSelectedIndex].z
            );
            scene.remove(scene.getObjectByName("Path"));
            this.loadPath();
        },
        changeDestinationPoint(index) {
            this.destinationPointSelectedIndex = index;
            this.setPointerPosition(
                this.points[this.destinationPointSelectedIndex].x,
                this.points[this.destinationPointSelectedIndex].y,
                this.points[this.destinationPointSelectedIndex].z
            );
            scene.remove(scene.getObjectByName("Path"));
            this.loadPath();
        },
        init3D() {
            scene.background = new THREE.Color(0xabcdef);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(this.renderer.domElement);
            scene.add(this.ambientLight);
            this.setCameraPosition(
                this.points[this.startPointSelectedIndex].x,
                this.points[this.startPointSelectedIndex].y,
                this.points[this.startPointSelectedIndex].z
            );
            this.loadMap();
            this.loadShelf();
            this.loadPointer();
            this.loadPath();
            this.controls = new PointerLockControls(this.camera, this.renderer.domElement)
        },
        initLisnter() {
            document.addEventListener("keydown", event => {
                this.handleKeyDown(event.code);
            });
            document.addEventListener("keyup", event => {
                this.handleKeyUp(event.code);
            });
            window.addEventListener("resize", this.handleResize);
            window.addEventListener("deviceorientation", this.handleOrientation, false);
            window.addEventListener("devicemotion", this.handleMotion, false);
            document
                .querySelectorAll("canvas")[0]
                .addEventListener("click", (event) => this.handleClickOnObject(event));
        },
        setCameraPosition(x, y, z) {
            this.camera.position.x = x;
            this.camera.position.y = y;
            this.camera.position.z = z;
        },
        loadMap() {
            this.loader.load(
                map,
                (function (mapConstraint) {
                    return function (gltf) {
                        gltf.scene.scale.set(1, 1, 1);
                        gltf.scene.position.set(0, 0, 0);
                        gltf.scene.name = "Map";
                        scene.add(gltf.scene);
                        const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
                        const max = boundingBox.max;
                        const min = boundingBox.min;
                        mapConstraint.maxX = max.x - 0.2;
                        mapConstraint.maxY = max.y;
                        mapConstraint.maxZ = max.z - 0.2;
                        mapConstraint.minX = min.x + 0.2;
                        mapConstraint.minY = min.y;
                        mapConstraint.minZ = min.z + 0.2;
                    };
                })(this.mapConstraint),
                undefined,
                function (error) {
                    console.error(error);
                }
            );
        },
        loadShelf() {
            for (var i = 0; i < this.shelfs.length; i++) {
                this.loader.load(
                    shelfModel,
                    (function (shelfData) {
                        return function (gltf) {
                            gltf.scene.scale.set(1, 1, 1);
                            gltf.scene.position.set(shelfData.location.x, shelfData.location.y, shelfData.location.z);
                            var aplha = shelfData.rotation.aplha;
                            var beta = shelfData.rotation.beta == 0 ? 0 : 135;
                            var gamma = shelfData.rotation.gamma;
                            gltf.scene.rotation.set(
                                aplha,
                                beta,
                                gamma
                            )
                            gltf.scene.name = shelfData.name;
                            scene.add(gltf.scene);
                        };
                    })(this.shelfs[i]),
                    undefined,
                    function (error) {
                        console.error(error);
                    }
                );
            }

        },
        loadPointer() {
            this.loader.load(
                pointer,
                (function (location) {
                    return function (gltf) {
                        gltf.scene.scale.set(1, 1, 1);
                        gltf.scene.position.set(location.x, location.y, location.z);
                        gltf.scene.name = "Pointer";
                        pointerObject = gltf.scene;
                        scene.add(gltf.scene);
                    };
                })(this.points[this.destinationPointSelectedIndex]),
                undefined,
                function (error) {
                    console.error(error);
                }
            );
        },
        loadPath() {
            var selectedPath = this.path[this.startPointSelectedIndex][this.destinationPointSelectedIndex];
            var joints = []
            for (var i = 0; i < selectedPath.length; i++) {
                joints.push(selectedPath[i].x);
                joints.push(selectedPath[i].y);
                joints.push(selectedPath[i].z);
            }
            var gemotry = new LineGeometry();
            gemotry.setPositions(joints);
            var material = new LineMaterial({
                color: 0xdd2222,
                linewidth: 5,
                resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
            });
            var line = new Line2(gemotry, material);
            line.name = "Path";
            console.log(line)
            scene.add(line);
        },
        handleKeyDown(keyCode) {
            switch (keyCode) {
                case "KeyW":
                    this.movement.forward = true;
                    break;
                case "KeyS":
                    this.movement.backward = true;
                    break;
                case "KeyA":
                    this.movement.left = true;
                    break;
                case "KeyD":
                    this.movement.right = true;
                    break;
                case "KeyQ":
                    this.movement.rotateLeft = true;
                    break;
                case "KeyE":
                    this.movement.rotateRight = true;
                    break;
            }
        },
        handleKeyUp(keyCode) {
            switch (keyCode) {
                case "KeyW":
                    this.movement.forward = false;
                    break;
                case "KeyS":
                    this.movement.backward = false;
                    break;
                case "KeyA":
                    this.movement.left = false;
                    break;
                case "KeyD":
                    this.movement.right = false;
                    break;
                case "KeyQ":
                    this.movement.rotateLeft = false;
                    break;
                case "KeyE":
                    this.movement.rotateRight = false;
                    break;
            }
        },
        handleResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        },
        handleOrientation(event) {
            if (this.orientation.initialAlpha === 0 && this.orientation.initialBeta === 0 && this.orientation.initialGamma === 0) {
                this.orientation.initialAlpha = event.alpha || 0;
                this.orientation.initialBeta = event.beta || 0;
                this.orientation.initialGamma = event.gamma || 0;
            }
            var alpha = (event.alpha || 0) - this.orientation.initialAlpha;
            var beta = (event.beta || 0) - this.orientation.initialBeta;
            var gamma = (event.gamma || 0) - this.orientation.initialGamma;
            alpha = THREE.MathUtils.degToRad(alpha);
            beta = THREE.MathUtils.degToRad(beta);
            gamma = THREE.MathUtils.degToRad(gamma);
            this.camera.rotation.set(beta, alpha, -gamma);
        },
        handleMotion(event) {
            const activeThreshold = 1;
            const stepThreshold = 0.3;
            if (
                Math.abs(event.acceleration.x) < activeThreshold &&
                Math.abs(event.acceleration.x) < activeThreshold &&
                Math.abs(event.acceleration.x) < activeThreshold
            ) {
                return;
            }
            document.getElementById("AX").innerHTML = "AX:" + event.acceleration.x;
            document.getElementById("AY").innerHTML = "AY:" + event.acceleration.y;
            document.getElementById("AZ").innerHTML = "AZ:" + event.acceleration.z;
            // update camera's positoin based on acceleration values
            document.getElementById("camera").innerHTML =
                "X:" +
                this.camera.position.x +
                "\nY:" +
                this.camera.position.y +
                "\nZ:" +
                this.camera.position.z;
            const acc = event.accelerationIncludingGravity;
            if (!acc) return;
            const currentAcc = this.getMagnitude(acc);
            // If previous acceleration data exists, compare with current acceleration
            if (this.previousAcc) {
                const accDiff = Math.abs(currentAcc - this.previousAcc);
                document.getElementById("accDiff").innerHTML = "accDiff:" + accDiff;
                if (accDiff > stepThreshold) {
                    this.motion.stepCount++;
                    this.camera.getWorldDirection(this.cameraDirection);
                    this.controls
                        .getObject()
                        .position.add(this.cameraDirection.multiplyScalar(0.01));
                    document.getElementById("Step").innerHTML = "Step" + this.motion.stepCount;
                }
            }
            // Update previous acceleration
            this.previousAcc = currentAcc;
        },
        getMagnitude(acc) {
            const { x, y, z } = acc;
            return Math.sqrt(x * x + y * y + z * z);
        },
        updateCameraPosition() {
            this.camera.position.x = Math.max(
                this.mapConstraint.minX,
                Math.min(this.mapConstraint.maxX, this.camera.position.x)
            );
            this.camera.position.y = Math.max(
                this.mapConstraint.minY,
                Math.min(this.mapConstraint.maxY, this.camera.position.y)
            );
            this.camera.position.z = Math.max(
                this.mapConstraint.minZ,
                Math.min(this.mapConstraint.maxZ, this.camera.position.z)
            );
        },
        setPointerPosition(x, y, z) {
            pointerObject.position.x = x;
            pointerObject.position.y = y;
            pointerObject.position.z = z;
        },
        handleClickOnObject(event) {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.performCollisionDetection();
        },
        findTopParent(object) {
            let topParent = object;
            while (topParent.parent.name !== '') {
                topParent = topParent.parent;
            }
            return topParent;
        },
        updateRaycaster() {
            this.raycaster.setFromCamera(this.mouse, this.camera);
        },
        performCollisionDetection() {
            // Update the raycaster
            this.updateRaycaster();

            // Perform intersection test
            const intersects = this.raycaster.intersectObjects(scene.children, true);
            var distanceThreshold = 100;
            // Handle collisions
            if (intersects.length > 0 && intersects[0].distance < distanceThreshold) {
                console.log(intersects);
                for (var i = 0; i < intersects.length; i++) {
                    var intersect = intersects[i];
                    var topObject = this.findTopParent(intersect.object);
                    console.log(topObject.name);
                    break;
                }
            }
        },
        animate() {
            requestAnimationFrame(this.animate);
            var moveSpeed = 0.1; // Adjust the movement speed as needed
            var rotateSpeed = 0.01; // Adjust the rotation speed as needed

            if (this.movement.forward) {
                this.camera.getWorldDirection(this.cameraDirection);
                this.controls
                    .getObject()
                    .position.add(this.cameraDirection.multiplyScalar(moveSpeed));
            }
            if (this.movement.backward) {
                this.camera.getWorldDirection(this.cameraDirection);
                this.controls
                    .getObject()
                    .position.add(this.cameraDirection.multiplyScalar(-moveSpeed));
            }
            if (this.movement.left) {
                this.camera.getWorldDirection(this.cameraDirection);
                this.controls
                    .getObject()
                    .position.add(
                        this.cameraDirection
                            .cross(new THREE.Vector3(0, 1, 0))
                            .normalize()
                            .multiplyScalar(-moveSpeed)
                    );
            }
            if (this.movement.right) {
                this.camera.getWorldDirection(this.cameraDirection);
                this.controls
                    .getObject()
                    .position.add(
                        this.cameraDirection
                            .cross(new THREE.Vector3(0, 1, 0))
                            .normalize()
                            .multiplyScalar(moveSpeed)
                    );
            }
            if (this.movement.rotateLeft) {
                this.controls.getObject().rotation.y += rotateSpeed;
            }
            if (this.movement.rotateRight) {
                this.controls.getObject().rotation.y -= rotateSpeed;
            }
            this.updateCameraPosition();
            this.renderer.render(scene, this.camera);
        }
    },
}
</script>