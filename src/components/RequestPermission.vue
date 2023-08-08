<template>
    <div>
        <button @click="showModal">Open Modal</button>
        <div v-if="isModalOpen" class="modal">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <h2>Modal Title</h2>
                <p>Modal content goes here.</p>
                <button @click="requestDeviceMotion">DeviceMotion</button>
                <button @click="requestDeviceOrientation">DeviceOrientation</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isModalOpen: false,
            alpha : 0,
            beta : 0,
            gamma : 0,
            AccelerationX: 0,
            AccelerationY: 0,
            AccelerationZ: 0
        };
    },
    methods: {
        showModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
        requestDeviceMotion() {
            // feature detect
            if (typeof DeviceMotionEvent.requestPermission === 'function') {
                DeviceMotionEvent.requestPermission()
                    .then(permissionState => {
                        if (permissionState === 'granted') {
                            window.addEventListener('devicemotion', (event) => {
                                this.alpha = event.alpha;
                                this.beta = event.beta;
                                this.gamma = event.gamma;
                             });
                            window.addEventListener('deviceorientation', (event) => {
                                this.AccelerationX = event.accelerationIncludingGravity.x;
                                this.AccelerationY = event.accelerationIncludingGravity.y;
                                this.AccelerationZ = event.accelerationIncludingGravity.z;
                             });
                        }
                    })
                    .catch(console.error);
            } else {
                // handle regular non iOS 13+ devices
                console.log("Motion");
            }
        },
        requestDeviceOrientation() {
            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission()
                    .then(permissionState => {
                        if (permissionState === 'granted') {
                            window.addEventListener('deviceorientation', () => { });
                        }
                    })
                    .catch(console.error);
            } else {
                // handle regular non iOS 13+ devices
                console.log("Or");
            }
        }
    }
};
</script>
  
<style>
.modal {
    display: block;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>