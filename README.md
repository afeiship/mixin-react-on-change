# react-mixin-on-change
> OnChange mixin for react.


## install:
```bash
npm install -S @feizheng/react-mixin-on-change --registry=https://registry.npm.taobao.org
```

## bugs:
- [ ] state when formData.xx_field

## usage:
```js
// create file in: mixins/on-change.js
export default require('@feizheng/react-mixin-on-change').default(nx.$app);


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
