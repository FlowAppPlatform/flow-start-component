# Flow Start component
The component is intended to run at the start of each graph and is designed to work with the Flow SDK.  It is available as an npm package.

*To use the component, install the package in your NodeJS project*

```
npm install flow-start-component --save
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
component.getPort('Sent').onEmit(function(){
  // task done successfully
});

// execute the component
component.execute();
```

#### Conclusion

That's all required to run the Flow Start component.