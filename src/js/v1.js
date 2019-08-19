/**
 * Created by jack on 2019/8/14.
 */

import Vue from  'vue'


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue1!',
        message2: 'Hello Vue1!',
        num:15,
        picked:''
    },
    methods: {
        add:function(num){
            if(num!=''&&num!=undefined){
                this.num+=num
            }
            else{
                this.num++
            }
        },
        setMessage:function(msg){
            this.message2 = msg;
        },
    },
    created() {
        this.add(10);
        this.setMessage('你好，我是赋值以后');
    }
});
