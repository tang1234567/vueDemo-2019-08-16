/**
 * Created by jack on 2019/8/14.
 */
import Vue from 'vue'

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue2!',
        seen:false,
        ok:true,
        use:true,
        object:[
            { name: '京东' },
            { name: '淘宝' },
            { name: '拼多多' }
        ]
    },
    methods:{
        changeStatus:function () {
            this.use = this.use?false:true
        }
    }
});

//监听器
app.$watch('use', function(nval, oval) {
    alert('值的变化 :' + oval + ' 变为 ' + nval + '!');
});