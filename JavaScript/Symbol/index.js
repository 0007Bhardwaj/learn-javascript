const iterableObj = {
    data: [1, 2, 3],
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.data.length) {
            return { value: this.data[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  for (const value of iterableObj) {
    console.log(value); // 1, 2, 3
  }