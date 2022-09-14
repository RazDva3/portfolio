import Vue from 'vue';

const btns = {
  template: "#reviews-btns",
}

const author = {
  template: "#reviews-author",
  props: {
    currentReview: Object
  },

}

const contentText = {
  template: "#reviews-content",
  props: {
    reviews: Array,
    currentReview: Object
  },
  components: {
    btns, author
  },
}

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    contentText
  },
  data() {
    return {
      reviews: [],
      currentIndex: 0
    }
  },
  computed: {
    currentReview() {
      return this.reviews[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      const reviewsLengthFromZero = this.reviews.length - 1;
      if(value < 0) this.currentIndex = reviewsLengthFromZero;
      if(value > reviewsLengthFromZero) this.currentIndex = 0;
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.authorPic}`);
        item.authorPic = requirePic;
        return item;
      })
    },
    handleSlide(direction) {
      switch(direction) {
        case 'next':
          this.currentIndex++;
          break;
        case 'prev':
          this.currentIndex--;
          break;
      }
    }
  },
  created() {
    const data = require('../data/reviews.json');

    this.reviews = this.makeArrWithRequiredImages(data);
  }
})