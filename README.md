# jetbrains-react

React snippets(live templates) for JetBrains series editors (e.g. WebStorm, PHPStorm, IntelliJ IDEA, etc.), stolen from [sublime-react](https://github.com/reactjs/sublime-react) and [phpstorm-reactjs](https://github.com/Minwe/phpstorm-reactjs).

## Installation

### Importing

1. Download `jetbrains-react.jar`;
2. Click `File` -> `Importing Settings...` on your IDE menubar, select `jetbrains-react.jar`, then click `OK`.

### Install Manually

1. Download and copy the `jetbrains/templates/ReactJS.xml` file to your templates folder:

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

<!--DOC_START-->
### `rcc`

```js
import React from 'react';

const $class$ = React.createClass({
  render() {
    return (
      <div />
    );
  }
});

export default $class$;

```

### `rcc5`

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

### `rcls`

```js
import React from 'react';

class $class$ extends React.Component {
  render() {
    return (
      <div />
    );
  }
}

$class$.propTypes = {};
$class$.defaultProps = {};

export default $class$;

```

### `rccc`

```js
$START$ = React.createClass({
  render() {
    return (
      $END$
    );
  }
});

```

### `rccc5`

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
componentDidMount() {
  $END$
},

```

### `cdm5`

```js
componentDidMount: function() {
  $END$
},

```

### `cdu`

```js
componentDidUpdate(prevProps, prevState) {
  $END$
},

```

### `cdu5`

```js
componentDidUpdate: function(prevProps, prevState) {
  $END$
},

```

### `cwm`

```js
componentWillMount() {
  $END$
},

```

### `cwm5`

```js
componentWillMount: function() {
  $END$
},

```

### `cwr`

```js
componentWillReceiveProps(nextProps) {
  $END$
},

```

### `cwr5`

```js
componentWillReceiveProps: function(nextProps) {
  $END$
},

```

### `cwu`

```js
componentWillUpdate(nextProps, nextState) {
  $END$
},

```

### `cwu5`

```js
componentWillUpdate: function(nextProps, nextState) {
  $END$
},

```

### `cwum`

```js
componentWillUnmount() {
  $END$
},

```

### `cwum5`

```js
componentWillUnmount: function() {
  $END$
},

```

### `fdn`

```js
ReactDOM.findDOMNode($END$);
```

### `fup`

```js
forceUpdate($END$);
```

### `gdp`

```js
getDefaultProps() {
  return {
    $END$
  };
},

```

### `gdp5`

```js
getDefaultProps: function() {
  return {
    $END$
  };
},

```

### `gis`

```js
getInitialState() {
  return {
    $START$: $END$
  };
},

```

### `gis5`

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
this.props
```

### `pt`

```js
propTypes: {
  $START$: React.PropTypes.$END$
},

```

### `rp`

```js
$START$: React.PropTypes.$END$
```

### `refs`

```js
this.refs.$END$
```

### `ren`

```js
render() {
  return (
    <div />$END$
  );
}

```

### `ren5`

```js
render: function() {
  return (
    <div />$END$
  );
}

```

### `scu`

```js
shouldComponentUpdate(nextProps, nextState) {
  $END$
},

```

### `scu5`

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

### `ct`

```js
contextTypes: {
  $START$: React.PropTypes.$END$
},

```

### `cct`

```js
childContextTypes: {
  $START$: React.PropTypes.$END$
},

```

### `gcc`

```js
getChildContext() {
  return {
    $START$: $END$
  };
},

```

### `gcc5`

```js
getChildContext: function() {
  return {
    $START$: $END$
  };
},

```


<!--DOC_END-->
