Page({
    data: {
        date: "",
        region: "",
    },

    submit: function (e) {
        let u = e.detail.value;
        wx.cloud
            .callFunction({
                name: "getUserInformation",
                data: {
                    type: "getUserInformation",
                    data: {
                        ...u,
                        // age: new Date().getFullYear() - parseInt(u.date.split("-")[0]),
                        region: this.data.region,
                    }
                }
            })
            .then(res => {
                console.log(res);
            });
        console.log(e);
    },
    dateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    regionChange: function (e) {
        this.setData({
            region: e.detail.value
        })
    },
})