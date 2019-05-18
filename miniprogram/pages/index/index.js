const app = getApp()

Page({

  onLoad(){
    var id = null
    const db = wx.cloud.database()
    //  db.collection('test').add({
    //   // data 字段表示需新增的 JSON 数据
    //   data: {
    //     myData: 'Hello World!'
    //   },
    //   success(res) {
    //     console.log(res)
    //     id = res._id
    //     db.collection('test').doc(id).update({
    //      data: {
    //        myData: 'We have update it!'
    //     },
    //     success(res) {
    //     console.log(res)
    //   }
    // })
  
    
    // db.collection('test').doc('57896b495cdfcf1800cec3a76fa7af30').remove({
    //   success(res) {
    //     console.log(res)
    //   }
    // })

    // db.collection('test').doc('todo-identifiant-aleatoire').update({
    //   data: {
        
    //   },
    //   success(res) {
    //     console.log(res.data)
    //   }
        // })

    db.collection('test').doc('c0a3987b5cdfd2bd00d2503051ab7efb').get({
      success(res) {
        console.log(res)
      }
    })
  }
})