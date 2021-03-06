var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "Owner",
                headlineSecondLine: "",
                sublineFirstLine: "100% Mexicana",
                sublineSecondLine: "Owner",
                bgImg: "ownergorra.jpg",
                //rectImg: "https://i.postimg.cc/vTW0XkvM/slide-rect0.jpg"
				headlineFirstLine1:"Owner"
            },
            {
                headlineFirstLine: "",
                headlineSecondLine: "",
                sublineFirstLine: "100% Mexicana",
                sublineSecondLine: "Owner",
               bgImg: "ownerpolo.jpg",
               // rectImg: "https://i.postimg.cc/ryWZ8R2b/slide-rect1.jpg"
			   headlineFirstLine1:"Quienes Somos"
            },
            {
                headlineFirstLine: "",
               
                headlineSecondLine: "",
                sublineFirstLine: "100% Mexicana",
                sublineSecondLine: "Owner",
               
				   bgImg: "ownercamisa.jpg",
				   headlineFirstLine1:"Mision"
                //rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg"
            }
        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})