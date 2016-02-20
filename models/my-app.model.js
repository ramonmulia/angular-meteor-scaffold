
  MyApp = new Mongo.Collection("myapp");

  MyApp.allow({
    insert: function(userId, myapp) {
      return userId; //&& myapp.owner === userId;
    },
    update: function(userId, myapp, fields, modifier) {
      return userId; // && myapp.owner === userId;
    },
    remove: function(userId, myapp) {
      return userId;  //&& myapp.owner === userId;
    }
  });
