/**
 * Created by jack on 2019/8/15.
 */
import Vue from 'vue'

//全局组件
Vue.component('tpl', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: '模版组件',
        sites: [
            { text: '京东' },
            { text: '淘宝' },
            { text: '拼多多' }
        ]
    },
    methods:{
    },
    created() {
    }
});

