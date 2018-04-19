# react-mixin-on-change
> OnChange mixin for react.


## install:
```bash
npm install -S afeiship/react-mixin-on-change --registry=https://registry.npm.taobao.org
```

## bugs:
- [ ] state when formData.xx_field

## usage:
```js
// create file in: mixins/on-change.js

import AppBase from 'components/scripts/index';
export default require('react-mixin-on-change').default(AppBase);


// <input onChange={this.onChangeToState.bind(this, 'user.nickname')}>
// <input onChange={this.onChangeToState.bind(this, 'user.phone')}>

// state:
{
  user:{
    nickname:'',
    phone:''
  }
}
```
