Meteor.call('initList', (err, res) => {
   HabraList = res;
   //console.log(res);
});

setHeader = (header) => {
   Session.set('headerData': header);
}

getHeader = () => {
   return Session.get('headerData') ? Session.get('headerData') : {
      title: 'HabraReader',
      isBackVisible: false
   };
}
