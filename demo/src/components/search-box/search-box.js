export default {
    name: 'search-box',
    props: {
        value: { type: String, default: '' }
    },
    data() {
        return {
            query: this.value
        }
    },
    methods: {
        search() {
            this.$emit('search', this.query);
        }
    }
}