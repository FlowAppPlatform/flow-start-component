import Flow from 'flow-platform-sdk';

class Start extends Flow.Component {
  constructor() {
    
    super()
    this.name = 'Start';
    this.id = 'start';
    
    var port = new Flow.Port('Start');
    this.addPort(port);

    // emit port here
    this.attachTask(function () {
      this.getPort('Start').emit();
    });

  }
}

module.exports = Start