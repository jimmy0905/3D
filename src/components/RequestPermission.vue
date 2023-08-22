<template>
    <div>
        <div v-if="isModalOpen" class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">Request Permission</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="closeModal"></button>
                    </div>
                    <button type="button" class="btn btn-primary my-3 mx-auto" @click="requestDeviceMotion"
                        style='max-width:200px'>Request Permission</button>
                    <div class="modal-footer">
                        <p>We need some permission to run the navigation</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isModalOpen: true,
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
                            });
                            window.addEventListener('deviceorientation', (event) => {
                            });
                        }
                    })
                    .catch(console.error);
            } else {
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
    , mounted() {
        navigator.permissions.query({ name: "accelerometer" }).then((result) => {
            if (result.state === "granted") {
                 this.isModalOpen = false;
            } else if (result.state === "prompt") {
            }
        });

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
}</style>