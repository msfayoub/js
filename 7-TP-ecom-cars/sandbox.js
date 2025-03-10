const app = Vue.createApp({
    data() {
        return {
            pieces_autos: [],
            text: '',
            selectedCategory: '1',
            selectedPriceOrder: '1',
            selectedStockStatus: '0' 
        };
    },
    computed: {
        filteredPiecesAutos() {
            return this.pieces_autos
                .filter(piece => 
                    (this.selectedCategory === '1' || piece.categorie === this.selectedCategory) &&
                    (this.selectedStockStatus === '0' || (this.selectedStockStatus === '1' ? piece.inStock : !piece.inStock)) &&
                    (!this.text || piece.nom.toLowerCase().includes(this.text.toLowerCase()))
                )
                .sort((a, b) => 
                    this.selectedPriceOrder === '1' ? a.prix - b.prix : b.prix - a.prix
                );
        }
    },
    methods: {
        assignStockStatus(pieces) {
            return pieces.map(piece => {
                piece.inStock = Math.random() > 0.3;
                return piece;
            });
        }
    },
    mounted() {
        fetch('pieces-autos.json')
            .then(response => response.json())
            .then(data => {
                this.pieces_autos = this.assignStockStatus(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }
});

app.mount('#app');
