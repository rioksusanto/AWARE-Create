Template.QuestionnaireSingle.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleQuestionnaire', id);
  });
});

Template.QuestionnaireSingle.helpers({
  questionnaire: ()=> {
    var id = FlowRouter.getParam('id');
    return Questionnaires.findOne({_id: id});
  },
  updateQuestionnaireId: function() {
    var id = FlowRouter.getParam('id');
    return Questionnaires.findOne({_id: id});
  }
});