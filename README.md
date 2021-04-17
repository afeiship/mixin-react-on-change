# mixin-react-on-change
> OnChange mixin for react.

## installation
```bash
npm install -S @jswork/mixin-react-on-change
```

## bugs
- [ ] state when formData.xx_field

## usage
```js
// create file in: mixins/on-change.js
export default require('@jswork/mixin-react-on-change').default(nx.$app);


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
