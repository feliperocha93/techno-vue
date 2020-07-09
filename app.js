const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then((produtos) => produtos.json())
        .then((produtos) => (this.produtos = produtos));
    },
  },
  created() {
    this.fetchProdutos();
  },
});
