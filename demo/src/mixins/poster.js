
import noPoster from '../assets/img/nophoto.jpg';

export default {
    computed: {
        posterComp: function () {
            return !!this.posterPath
                ? 'https://image.tmdb.org/t/p/w300' + this.posterPath
                : noPoster;
        }
    }
}