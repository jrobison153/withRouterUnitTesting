# Purpose
Demonstrate how use of enzyme shallow render with react-router's 'withRouter' Higher Order Component do not
appear to work together.

The MyComponentTest unit test shallow renders the same component two different ways, one wrapped with the withRouter HOC and one
rendered normally.

The test attempts to use the ShallowWrapper find function to obtain the rendered text in each component. The shallow
rendered HOC wrapped component fails the test while the other passes as expected. 

# Usage

```
$ npm install
$ ./node_modules/karam/bin/karma start ./karma.conf
```

By default the tests will run in Chrome, you can modify the karma.conf file  if you want to target a different browser.