import Vue from 'vue';

Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1
            this.$emit('increment')
        }
    },
});


new Vue({
    el: '#counter-event-example',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
});

new Vue({
    el: '#app',
    data: {
        message: "",
        tasks :[
            {
                "name": "attend training"
            },
            {
                "name": "write today's daily blog"
            },
            {
                "name": "do the vuejs report"
            },
            {
                "name": "write a simple vuejs application"
            },
            {
                "name": "complete the styling challenge"
            }

        ]
    },
    methods: {
        deleteObject: function(index) {
            this.$delete(this.tasks, index);
        },

        Add() {
            if(this.message != "") {
                //alert message
                this.tasks.unshift({
                    name: this.message
                    // status: false
                });
                this.message = '';
            }

        },


    }
});

Vue.component('tasks', {
    template : '<li><slot></slot></li>'

});

new Vue({
    el: '#list'
});

Vue.component('message', {
    props:['title', 'body'],

    data() {
        return {
            isVisible : true
        };
    },

    template:
        '<article class="message" v-show="isVisible">' +
            '<div class="message-header">' +
                '{{ title }}' +
                '<button type="button" @click="hideMessage"> Close </button>'  +
            '</div>' +
                '<div class="message-body">' +
                '{{ body }}' +
            '</div>' +
        '</article>',

    methods :{
        hideMessage(){
            this.isVisible = false;
        }
    }


});


Vue.component('modal', {
    template:
        '<div class="modal is-active">' +
            '<div class="modal-background"></div>' +
                '<div class="modal-content">' +
                    '<div class="box"' +
                        '<p> Getting used to VueJs</p>' +
                     '</div>' +
                 '</div>' +
            '<button class="modal-close"> </button>' +
        '</div>'
});

new Vue ({
    el: '#messages'
});