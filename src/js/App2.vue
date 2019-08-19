/**
 * Created by jack on 2019/8/15.
 */
<template>
 <div>
 <h2>安装:</h2>
 <h2>npm i vue-loader vue-template-compiler vue-style-loader </h2>
  <h4>{{ msg }} </h4>
     <input type="button" value="点我" @click="clickMsg()"/>
     <p> ---------------------------------------------------------------</p>
     <h2>自定义指令</h2>
  <input type="text" value=""  v-bindMsg="msg2"/>
     <h2>点击切换组件</h2>
         <input type="button" value="点我获取组件comp1" @click="getComp(1)"/>
         <input type="button" value="点我获取组件comp2" @click="getComp(2)"/>
         <component :is="comName"></component>
     <p> ---------------------------------------------------------------</p>

     <!--<h2>一次插入多个组件的写法</h2>-->
  <!--<comp1></comp1>-->
  <!--<comp2></comp2>-->
 </div>
</template>

<script>

    import comp1 from './components/comp1.vue';
    import comp2 from './components/comp2.vue';

    export default {
        name: 'App',
        data () {
            return {
                msg: 'Hello Vue.js 单文件组件~2',
                msg2:{
                    'a':'1111',
                    'b':'2222'
                },
                comName: 'comp1'
            }
        },
        components: {
            comp1,
            comp2
        },
        created() {
        },
        methods:{
            clickMsg:function () {
               this.msg = '信息被改变了'
            },
            getComp:function (comp) {
                switch (comp) {
                    case 1:
                        this.comName = 'comp1';
                        break;
                    case 2:
                        this.comName = 'comp2';
                        break;
                }
            }
        },
        directives: {
            // 注册一个局部的自定义指令 bindMsg
            bindMsg: {
                // 指令的定义
                //bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
                // inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
                // update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
                //componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
                //unbind: 只调用一次， 指令与元素解绑时调用
                inserted: function (el,binding) {
                    //binding: 一个对象，包含以下属性：
//                    name: 指令名，不包括 v- 前缀。
//                    value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
//                    oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
//                    expression: 绑定值的表达式或变量名。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
//                    arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
//                    modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
//                  el.value = binding.value+'-----我是自定义指令';
                    el.value = binding.value.a+'-----我是自定义指令';
                }
            }
        }
    }
</script>
<style>
 h1 {
  color: green;
 }
</style>