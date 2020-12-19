module.exports = function(url, method, query, body) {
  return {
    CODE: "00",
    MSG: "ok",
    DATA: {
      list: [
        {
          id: 1,
          name: "三餐",
          icon: "mifan"
        },
        {
          id: 2,
          name: "娱乐",
          icon: "xiaolian"
        },
        {
          id: 3,
          name: "学习用品",
          icon: "bi"
        },
        {
          id: 4,
          name: "服饰",
          icon: "Txu"
        },
        {
          id: 5,
          name: "交通",
          icon: "gongjiaoche"
        },
        {
          id: 6,
          name: "零食",
          icon: "li"
        }
      ]
    }
  };
};
