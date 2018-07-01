new Vue ({
	el:"#vue-app",
	data:{
		name:"米斯特吴",
		job:"web开发"
	},
	methods:{

		greet: function(time){
			return 'Good ' + time + " " + this.name + "!";
		}
	}

});

/*
* el: element 需要获取的元素
*/