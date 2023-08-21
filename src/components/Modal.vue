<template>
    <div class="modal" v-if="showModal">
        <div class="modal-backdrop" @click="closeModal"></div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>{{ title }}</h3>
                    <button @click="closeModal">
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>
                <div class="modal-body">
                    <Carousel :autoplay="5000" :wrap-around="true" v-if="imageSrc.length > 0">
                        <Slide v-for="(image, index) in imageSrc" :key="index">
                            <img :src="image" alt="Carousel Image" class="banner" />
                        </Slide>
                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                    <table border="1" style="width: 100%;">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Manufacturer</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products">
                                <td>{{ product.name }}</td>
                                <td>{{ product.manufacturer }}</td>
                                <td>{{ product.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    components: {
        Carousel,
        Navigation,
        Pagination,
        Slide,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        imageSrc: {
            type: Array,
            required: false,
            default: () => [],
        },
        showModal: {
            type: Boolean,
            required: true,
        },
        closeModal: {
            type: Function,
            required: true,
        },
        products: {
            type: Array,
            required: false,
            default: () => [],
        }
    },
};
</script>
  
<style scoped>
/* Modal styles */
.banner {
    height: 20vh;
    min-height: 100px;
}

.carousel__pagination {
    padding: 0;
}

.modal-content {
    border-radius: 10px;
    max-height: 70vh;
}

.modal-header {
    display: flex;
    justify-content: space-between;
}

button {
    border: none;
    background-color: transparent;
}
</style>