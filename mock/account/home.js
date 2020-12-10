module.exports = function(url, method, query, body) {
  return {
    CODE: "00",
    MSG: "ok",
    DATA: {
      list: [
        // 按时间顺序倒序
        // 收入和支出按类型区分
        {
          date: 1606981229056,
          payTotal: 200, // 支出合计金额
          incomeTotal: 0, // 收入合计金额
          list: [
            {
              id: 1,
              type: 2, // 1 收入 2 支出
              icon: {
                id: 1,
                name: "三餐",
                icon: "aixin"
              },
              label: "范围内国内外派人逼格",
              price: 289, // 单位分
              date: 1606981229056
            },
            {
              id: 2,
              type: 1, // 1 收入 2 支出
              icon: {
                id: 1,
                name: "三餐",
                icon: "aixin"
              },
              label: "",
              price: 189, // 单位分
              date: 1606981226056
            }
          ]
        },
        {
          date: 1606981225432,
          payTotal: 200, // 支出合计金额
          incomeTotal: 0, // 收入合计金额
          list: [
            {
              id: 1,
              type: 2, // 1 收入 2 支出
              icon: {
                id: 1,
                name: "三餐",
                icon: "aixin"
              },
              label: "2",
              price: 289, // 单位分
              date: 1606981225432
            },
            {
              id: 2,
              type: 1, // 1 收入 2 支出
              icon: {
                id: 1,
                name: "三餐",
                icon: "aixin"
              },
              label: "2222",
              price: 189, // 单位分
              date: 1606981220432
            }
          ]
        }
      ]
    }
  };
};
