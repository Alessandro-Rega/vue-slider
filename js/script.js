const app = new Vue({
    el: '#root',
    data: {
        items: [
            "img/01.jpg",
            "img/02.jpg",
            "img/03.jpg",
            "img/04.jpg",
            "img/05.jpg"
        ],
        title: [
            'Svezia',
            'Svizzera',
            'Gran Bretagna',
            'Germania',
            'Paradise'
        ],
        text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            'Lorem ipsum',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        ],
        current: 0,
    },
    methods: {
        prossimaImmagine: function(){
            if(this.current < this.items.length - 1)this.current++;
            else this.current = 0;
        },
        immaginePrecedente: function(){
            if(this.current > 0)this.current--;
            else this.current = 4;
        }
    }
});