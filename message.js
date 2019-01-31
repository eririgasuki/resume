var APP_ID = 'jDoTAPOfboArFheofAEjYyv1-gzGzoHsz';
var APP_KEY = 'KHQo4H2k3rmv7lMW4HzcxYHg';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var query = new AV.Query('Message_Board');
query.find()
  .then((e) => {
    let array = e.map((item) => item.attributes)
    array.forEach((item) => {
      let li = document.createElement('li')
      li.innerText = `${item.name}: ${item.content}`
      let messageList = document.querySelector('#messageList')
      messageList.append(li)
    })
  })



let myForm = document.querySelector('.messageBoard > .message')
myForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let content = document.querySelector('input[name=content]').value
  let name = document.querySelector('input[name=name]').value
  var Message = AV.Object.extend('Message_Board')
  var message = new Message()
  message.save({
    name: name,
    content: content
  }).then((obj) => {
    let li = document.createElement('li')
    li.innerText = `${obj.attributes.name}: ${obj.attributes.content}`
    let messageList = document.querySelector('#messageList')
    messageList.append(li)
    myForm.querySelector('input[name=content]').value = ''
    console.log(obj)
  })
})