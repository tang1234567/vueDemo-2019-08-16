/**
 * Created by jack on 2019/8/15.
 */
import Vue from 'vue';
import App2 from '../js/App2.vue';


new Vue({
    el: "#app",
    render: (c) => c(
        App2
    )
});

// new Vue({
//     render: (c) => c(
//         App2
//    )
// }).$mount('#app')