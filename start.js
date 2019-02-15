const Flow = require('flow-platform-sdk');

class Start extends Flow.Component {
  constructor(id = null) {
    
    super(id)
    this.name = 'Start';
    
    var port = new Flow.Port('Start');
    this.addPort(port);

    // emit port here
    this.attachTask(function () {
      this.getPort('Start').emit();
      this.taskComplete();
    });

  }
}

module.exports = Start