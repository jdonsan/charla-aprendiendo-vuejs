import SearchBox from '@/components/search-box/search-box.vue';
import AppMain from '@/components/app-main/app-main.vue';

export default {
    name: 'view-home',
    components: {
        AppMain,
        SearchBox
    },
    data() {
        return {
            queryDefault: 'Cinema Paradiso'
        }
    },
    methods: {
        searchMovie(query) {
            alert(query);
        }
    }
}