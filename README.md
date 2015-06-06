# jetbrains-react

React snippets(live templates) for JetBrains series editors (e.g. WebStorm, PHPStorm, IntelliJ IDEA, etc.), stolen from [sublime-react](https://github.com/reactjs/sublime-react) and [phpstorm-reactjs](https://github.com/Minwe/phpstorm-reactjs).

## Installation

1. Download and copy the xml file to your templates folder:

  - Windows: `<your home directory>\.<product name><version number>\config\templates`
  - Linux: `~\.<product name><version number>\config\templates`
  - OS X: `~/Library/Preferences/<product name><version number>/templates`

  e.g. `~/Library/Preferences/WebStorm10/templates` on OS X for WebStorm 10

2. Restart your IDE.

3. To see all templates, go to `Preferences` -> `Live Templates` and expand the `ReactJS` Template Group.


## Usage

It's hard to remember shortcuts when there are a large number of options. A more efficient way is to take advantage of editor's Insert Live Template shortcut. Press `Cmd + J` and type as many letters as you want to filter the resulates.

For example, to create a new React class, type `rcc` and press `Tab` or press `Cmd + J` and write `rcc` or `React`.

**Documentation of available snippets (JSX):**

### `rcc`

```js
'use strict';

var React = require('react');

var $class$ = React.createClass({
  render: function() {
    return (
      <div />
    );
  }
});

module.exports = $class$;

```

Nested component **`rccc`**:

```js
$START$ = React.createClass({
 render: function() {
   return (
     $END$
   );
 }
});

```

### `cdm`

```js
componentDidMount: function() {

},

```

### `cdup`

```js
componentDidUpdate: function(prevProps, prevState) {

},

```

### `cwm`

```js
componentWillMount: function() {
  $END$
},

```

### `cwr`

```js
componentWillReceiveProps: function(nextProps) {
  $END$
},
  
```
### `cwu`

```js
componentWillUpdate: function(nextProps, nextState) {
  $END$
},

```

### `cwun`

```js
componentWillUnmount: function() {
  $END$
},


```

### `fdn`

```js
React.findDOMNode($END$);
```

### `fup`

```js
forceUpdate(...)
```

### `gdp`

```js
getDefaultProps: function() {
  return {
    $END$
  };
},

```

### `gis`

```js
getInitialState: function() {
  return {
    $START$: $END$ 
  };
},

```  

### `ism`

```js
isMounted()
```

### `props`

```js
this.props.
```

### `pt`

```js
propTypes: {
  $START$: React.PropTypes.$END$
},

```

**`rp`**

```js
$SART$: React.PropTypes.$END$
```

### `refs`

```js
this.refs.$END$
```

### `ren`

```js
render: function() {
  return (
    <div />$END$
  );
}

```

### `scu`

```js
shouldComponentUpdate: function(nextProps, nextState) {
  $END$
},

```

### `sst`

```js
this.setState({
  $START$: $END$ 
});
```
### `state`

```js
this.state.$END$
```
