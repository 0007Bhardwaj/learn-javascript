const myObj = {
  name: "bhardwaj",
  city: {
    pincode: "110038",
  },
  socialMedia: {
    facebook: {
      name: "bhardwaj28",
      photos: ["abc.png", "png.png"],
      id: "42344244",
    },
  },
};

console.log( JSON.stringify(myObj,['name','facebook'])  );