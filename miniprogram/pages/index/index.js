Page({
    data:{
        hello: "hi",
    },
    change:function(){
        this.setData({
            hello: this.data.hello + " world"
        })
    }
});