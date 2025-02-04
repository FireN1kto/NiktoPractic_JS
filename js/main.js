Vue.component('product', {
    template: `
    <div class="product">
        <div class="product-image">
            <img :alt="altText" :src="image"/>
        </div>
        <div class="product-info">
            <div class="product-title">
                <h1>{{ title }}</h1>
                <p class="infoSale">{{ sale }}</p>
            </div>
            <div class="rendering">
                <p v-if="inStock">Товар есть на складе</p>
                <p v-else :class="{ OutOfStock:!inStock }">Нет в наличии</p>
            </div>
            <div class="description">
                <h2>Описание:</h2>
                <p>{{ description }}</p>
            </div>
            <div class="detail">
                <h2>Характеристики:</h2>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
            </div>
            <div
                class="color-box"
                v-for="(variant, index) in variants" 
                :key="variant.variantId"
                :style="{ backgroundColor:variant.variantColor }"
                @mouseover="updateProduct(index)"
            >
             </div>
            <div class="product-sizes">
                <div class="size" v-for="size in sizes">{{ size }}</div>
            </div>
            <button 
                v-on:click="addToCart"
                :disabled="!inStock"
                :class="{disabledButton: !inStock}"
            >Добавить в корзину</button>
            <button v-on:click="deleteFromCart">Удалить из карзины</button>
            <div class="moreProducts">
                <a :href="link">Больше подобных товаров</a>
            </div>
        </div>
        <div class="cart">
        <p>Корзина: {{ cart }}</p>
        </div>
    </div>
    `,
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            product: "Носки",
            brand: 'Vue Mastery',
            description: "Пара теплых, пушистых носков.",
            selectedVariant: 0,
            altText: "Пара носков",
            link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
            inventory: 100,
            onSale: true,
            details: ['80% хлопок', '20% полиэстер', 'Гендерно-нейтральный'],
            variants: [
                {
                    variantsId: 2234,
                    variantColor: 'green',
                    variantImage: "./img/Green-Socks.jpg",
                    variantQuantity: 10
                },
                {
                    variantsId: 2235,
                    variantColor: 'blue',
                    variantImage: "./img/Blue-Socks.jpg",
                    variantQuantity: 0
                }
            ],
            sizes: ['S','M','L','XL','XXL','XXXL'],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        },
        deleteFromCart() {
            this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        sale() {
            if (this.onSale) {
                return "Распродажа!" + " " + this.brand + " " + this.product + " " + "по специальной цене!";
            } else {
                return "Распродажы нет." + " " + this.brand + " " + this.product + " " + "по стандартной цене.";
            }
        }
    }
})

let app = new Vue ({
    el: '#app',
    data: {
        premium: true
    }
})