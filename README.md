# Flow Start component
The component is designed to work with the Flow SDK and runs at the start of each graph.

*To use the component, install the package in your NodeJS project*

```
npm i flow-start-component --save
```

*Use the component as below*

```javascript
// require the component
const Component = require('flow-start-component');

// create instance of the component
const component = new Component();
```

*Listen in for the Start port emit event*
```javascript
component.getPort('Start').onEmit(function(){
  // component ran successfully
});
```

*Execute the component*
```javascript
// add the component to a graph before executing it
const Graph = require('flow-platform-sdk').Graph;
new Graph("graph-1").addComponent(component);

component.execute();
```

#### Conclusion

That's the Flow Start component.