Template.studySensor.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleStudy', id);
  });

  SEO.set({
    title: "AWARE Create - Sensor data"
  });
});

Template.studySensor.helpers({
  append(string1, string2) {
    return string1 + '.' + string2;
  },
  study: ()=> {
    var id = FlowRouter.getParam('id');
    return Studies.findOne({_id: id});
  },
  updateStudyId: function() {
    var id = FlowRouter.getParam('id');
    return Studies.findOne({_id: id});
  }
});

AutoForm.addHooks("updateSensors",{
  onSuccess: function(formType, result) {
    FlowRouter.go("/study/:id/overview",{id: FlowRouter.getParam('id')});
  }
});
