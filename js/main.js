let app = new Vue ({
    el: '#app',
    data: {
        product: "Носки",
        description: "Пара теплых, пушистых носков.",
        image: "./img/Green-Socks.jpg",
        altText: "Пара носков",
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
        inStock: true,
        inventory: 100,
        onSale: true,
        details: ['80% хлопок', '20% полиэстер', 'Гендерно-нейтральный'],
        variants: [
            {
                variantsId: 2234,
                variantColor: 'зелёные',
                variantImage: "./img/Green-Socks.jpg"
            },
            {
                variantsId: 2235,
                variantColor: 'синие',
                variantImage: "./img/Blue-Socks.jpg"
            }
        ],
        sizes: ['S','M','L','XL','XXL','XXXL'],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        },
        deleteFromCart() {
            this.cart -= 1
        }
    }
})