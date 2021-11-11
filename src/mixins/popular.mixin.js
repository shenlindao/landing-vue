import _ from 'lodash';

export default {
  data() {
    return {
      allItems: [],
      items: [],
    };
  },

  methods: {
    setupPopular(allItems) {
      this.allItems = _.chunk(allItems, 3);
      this.items = this.allItems;
    },
  },
};
