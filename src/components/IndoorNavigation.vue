<template>
    <div class="InputSection d-flex justify-content-evenly py-2 ">
        <div class="col-5">
            <div class="Selection input-group ">
                <label class="input-group-text" for="sPoint">Start</label>
                <select class="form-select" v-model="startPoint" id="sPoint"
                    @change="changeStartPoint($event.target.selectedIndex)">
                    <option v-for="point in points" :value="point.name" :key="point.name">{{ point.name }}</option>
                </select>
            </div>
        </div>

        <div class="col-5">
            <div class="Selection input-group col-5">
                <label class="input-group-text" for="dPoint">End</label>
                <select class="form-select" v-model="destinationPoint" id="dPoint"
                    @change="changeDestinationPoint($event.target.selectedIndex)">
                    <option v-for="point in points" :value="point.name" :key="point.name">{{ point.name }}</option>
                </select>
            </div>
        </div>
    </div>
    <div style="
      position: absolute;
      z-index: 100;
      background-color: white;
      opacity: 0.5;
      bottom: 0;
    ">
        <p id="a">A:</p>
        <p id="b">B:</p>
        <!-- <p id="AX" style="color: black; background-color: white">AX:</p>
        <p id="AY" style="color: black; background-color: white">AY:</p>
        <p id="AZ" style="color: black; background-color: white">AZ:</p>
        <p id="camera" style="color: black; background-color: white">X: Y: Z:</p>
        <p id="accDiff" style="color: black; background-color: white">accDiff:</p>
        <p id="Step" style="color: black; background-color: white">Step:</p>
        <p id="or" style="color: black; background-color: white"></p> -->
    </div>
    <div class="row w-100 fixed-bottom m-0" style="opacity: 0.5; position: absolute;">
        <button type="button" class="btn btn-primary col" @touchstart="this.movement.rotateLeft = true"
            @touchend="this.movement.rotateLeft = false"><span class="material-symbols-outlined">
                turn_left
            </span></button>
        <button type="button" class="btn btn-primary col" @touchstart="this.movement.forward = true"
            @touchend="this.movement.forward = false"><span class="material-symbols-outlined">
                straight
            </span></button>
        <button type="button" class="btn btn-primary col" @touchstart="this.movement.rotateRight = true"
            @touchend="this.movement.rotateRight = false"><span class="material-symbols-outlined">
                turn_right
            </span></button>
    </div>
    <Modal v-if="showModal" :products="modalProducts" :imageSrc="modalImageSrc" :title="modalTitle" :showModal="showModal"
        :closeModal="closeModal" style="z-index: 1050;">
    </Modal>
    <div class="fixed-bottom mx-auto"></div>
</template>
  
<style>
.InputSection {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #094fA3;
}
</style>
  
<script>
import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import map from "@/assets/3D_Model/warehouse.glb";
import shelfModel from "@/assets/3D_Model/shelf.glb";
import pointer from "@/assets/3D_Model/map_pointer.glb";
import Modal from "@/components/Modal.vue"
var scene = new THREE.Scene();
var pointerObject = null;
let wallGeometry = new THREE.BoxGeometry(4.5, 8, 0.1);
let mapGeomery = null;
var material = new THREE.MeshBasicMaterial({ color: 0x909090 });
var lastAlpha = 0;
export default {
    components: {
        Modal
    },
    data() {
        return {
            showModal: false,
            modalTitle: "title",
            modalProducts: [],
            modalImageSrc: [],
            mapData: [],
            wallsData: [],
            points: [],
            shelfs: [],
            path: [],
            objects3D: [],
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
            ambientLight: new THREE.AmbientLight(0xffffff, 0.8),
            pointLight: new THREE.PointLight(0xffffff, 0.3, 0, 0.0001),
            loader: new GLTFLoader(),
            pointerLockControls: null,
            cameraDirection: new THREE.Vector3(),
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
            objectRaycaster: new THREE.Raycaster(),
            cameraRaycaster: new THREE.Raycaster(),
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
                this.mapData = data.map;
                this.wallsData = data.wall;
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
            this.pointLight.position.set(0, 10, 0);
            this.pointLight.castShadow = true;
            scene.add(this.pointLight);
            this.setCameraPosition(
                this.points[this.startPointSelectedIndex].x,
                this.points[this.startPointSelectedIndex].y,
                this.points[this.startPointSelectedIndex].z
            );
            this.loadMap();
            this.loadWall();
            this.loadShelf();
            this.loadPointer();
            this.loadPath();
            this.pointerLockControls = new PointerLockControls(this.camera, this.renderer.domElement)
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
            mapGeomery = new THREE.BoxGeometry(this.mapData.x, this.mapData.y, this.mapData.z);
            let map = new THREE.Mesh(mapGeomery, new THREE.MeshBasicMaterial({ color: 0x808080 }));
            map.position.set(0, -0.05, 0)
            scene.add(map);
        },
        loadWall() {
            for (let i = 0; i < this.wallsData.length; i++) {
                let wall = new THREE.Mesh(wallGeometry, material);
                wall.position.set(this.wallsData[i].location.x, this.wallsData[i].location.y, this.wallsData[i].location.z)
                var aplha = THREE.MathUtils.degToRad(this.wallsData[i].rotation.aplha);
                var beta = THREE.MathUtils.degToRad(this.wallsData[i].rotation.beta);
                var gamma = THREE.MathUtils.degToRad(this.wallsData[i].rotation.gamma);
                wall.rotation.set(aplha, beta, gamma);
                scene.add(wall);
                this.objects3D.push(wall);
            }
        },
        loadShelf() {
            for (let i = 0; i < this.shelfs.length; i++) {
                this.loader.load(
                    shelfModel,
                    (function (shelfData, objects3D) {
                        return function (gltf) {
                            gltf.scene.scale.set(1, 1, 1);
                            gltf.scene.position.set(shelfData.location.x, shelfData.location.y, shelfData.location.z);
                            var aplha = THREE.MathUtils.degToRad(shelfData.rotation.aplha);
                            var beta = THREE.MathUtils.degToRad(shelfData.rotation.beta);
                            var gamma = THREE.MathUtils.degToRad(shelfData.rotation.gamma);
                            gltf.scene.rotation.set(aplha, beta, gamma);
                            gltf.scene.name = "Shelf " + i;
                            scene.add(gltf.scene);
                            objects3D.push(gltf.scene);
                        };
                    })(this.shelfs[i], this.objects3D),
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
            if (this.checkCameraCollision()) {
                this.movement.forward = false;
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
            // var beta = (event.beta || 0) - this.orientation.initialBeta;
            // var gamma = (event.gamma || 0) - this.orientation.initialGamma;
            document.getElementById('a').innerText = "A:" + alpha;
            var tem = alpha;
            alpha = alpha - lastAlpha;
            lastAlpha = tem;
            alpha = THREE.MathUtils.degToRad(alpha);
            //beta = THREE.MathUtils.degToRad(beta);
            //gamma = THREE.MathUtils.degToRad(gamma);
            //this.camera.rotation.set(beta,alpha,gamma);
            document.getElementById('b').innerText = "B:" + event.beta;
            this.camera.rotation.y += alpha;
        },
        handleMotion(event) {
            const activeLowerThreshold = 1;
            const activeUpperThreshold = 3;
            const stepThreshold = 0.3;
            if (
                (Math.abs(event.acceleration.x) < activeLowerThreshold &&
                    Math.abs(event.acceleration.y) < activeLowerThreshold &&
                    Math.abs(event.acceleration.z) < activeLowerThreshold) ||
                (Math.abs(event.acceleration.x) > activeUpperThreshold &&
                    Math.abs(event.acceleration.y) > activeUpperThreshold &&
                    Math.abs(event.acceleration.z) > activeUpperThreshold)
            ) {
                return;
            }
            // update camera's positoin based on acceleration values
            const acc = event.accelerationIncludingGravity;
            if (!acc) return;
            const currentAcc = this.getMagnitude(acc);
            // If previous acceleration data exists, compare with current acceleration
            if (this.previousAcc) {
                const accDiff = Math.abs(currentAcc - this.previousAcc);
                if (this.checkCameraCollision()) {
                    return undefined;
                }
                if (accDiff > stepThreshold) {
                    this.motion.stepCount++;
                    this.camera.getWorldDirection(this.cameraDirection);
                    this.pointerLockControls
                        .getObject()
                        .position.add(this.cameraDirection.multiplyScalar(0.05));
                }
            }
            // Update previous acceleration
            this.previousAcc = currentAcc;
        },
        getMagnitude(acc) {
            const { x, y, z } = acc;
            return Math.sqrt(x * x + y * y + z * z);
        },
        checkCameraCollision() {
            const cameraFrustum = new THREE.Frustum();
            const cameraViewProjectionMatrix = new THREE.Matrix4().multiplyMatrices(
                this.camera.projectionMatrix,
                this.camera.matrixWorldInverse
            );
            cameraFrustum.setFromProjectionMatrix(cameraViewProjectionMatrix);
            const range = 2.5; // Define the desired detection range
            // Check each object for intersection with the camera frustum
            for (let i = 0; i < this.objects3D.length; i++) {
                const object = this.objects3D[i];
                const objectBox = new THREE.Box3().setFromObject(object);
                // Check if the object's bounding box is valid
                if (objectBox.isEmpty()) {
                    continue; // Skip this iteration if the box is empty
                }
                const objectCenter = new THREE.Vector3();
                objectBox.getCenter(objectCenter);

                const distance = this.camera.position.distanceTo(objectCenter);
                if (distance <= range && cameraFrustum.intersectsBox(objectBox)) {
                    // Camera is intersecting with the current object within the desired range
                    // console.log('Camera is surrounded by object:', object.name + "distance:" + distance);
                    // Perform necessary actions
                    return true;
                }
            }
        },
        updateCameraPosition() {
            if (
                this.checkCameraCollision()) {
                this.movement.forward = false;
                return undefined;
            }
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
        updateObjectRaycaster() {
            this.objectRaycaster.setFromCamera(this.mouse, this.camera);
        },
        performCollisionDetection() {
            // Update the raycaster
            this.updateObjectRaycaster();

            // Perform intersection test
            const intersects = this.objectRaycaster.intersectObjects(scene.children, true);
            var distanceThreshold = 10;
            // Handle collisions
            if (intersects.length > 0 && intersects[0].distance < distanceThreshold) {
                console.log(intersects);
                for (var i = 0; i < intersects.length; i++) {
                    var intersect = intersects[i];
                    var topObject = this.findTopParent(intersect.object);
                    let topObjectNameArray = topObject.name.split(' ');
                    let index = Number(topObjectNameArray[1]);
                    this.modalTitle = this.shelfs[index].name;
                    this.modalImageSrc = this.shelfs[index].img;
                    this.modalProducts = this.shelfs[index].products;
                    this.openModal();
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
                this.pointerLockControls
                    .getObject()
                    .position.add(this.cameraDirection.multiplyScalar(moveSpeed));
            }
            if (this.movement.backward) {
                this.camera.getWorldDirection(this.cameraDirection);
                this.pointerLockControls
                    .getObject()
                    .position.add(this.cameraDirection.multiplyScalar(-moveSpeed));
            }
            if (this.movement.left) {
                this.camera.getWorldDirection(this.cameraDirection);
                this.pointerLockControls
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
                this.pointerLockControls
                    .getObject()
                    .position.add(
                        this.cameraDirection
                            .cross(new THREE.Vector3(0, 1, 0))
                            .normalize()
                            .multiplyScalar(moveSpeed)
                    );
            }
            if (this.movement.rotateLeft) {
                this.pointerLockControls.getObject().rotation.y += rotateSpeed;
            }
            if (this.movement.rotateRight) {
                this.pointerLockControls.getObject().rotation.y -= rotateSpeed;
            }
            this.updateCameraPosition();

            this.renderer.render(scene, this.camera);
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    },
}
</script>