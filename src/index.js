import nx from 'next-js-core2';

const DOT = '.';
const MEMORY ='memory';
const LOCAL ='local';
const SESSION ='session';


export default function (inAppBase) {
  return class {
    onChangeToState(inPath, inEvent) {
      const { value } = inEvent.target;
      if (inPath.indexOf(DOT) > -1) {
        nx.path(this.state, inPath, value);
        this.setState(this.state);
      } else {
        this.setState({[inPath]: value});
      }
    }
    onChangeToMemory(inPath, inValue) {
      this.onChangeTo(MEMORY, inPath, inValue);
    }
    onChangeToLocal(inPath, inValue) {
      this.onChangeTo(LOCAL, inPath, inValue);
    }
    onChangeToSession(inPath, inValue) {
      this.onChangeTo(SESSION, inPath, inValue);
    }
    onChangeTo(inType, inPath, inEvent) {
      const data = inAppBase.$[inType];
      const { value } = inEvent.target;

      if (inPath.indexOf(DOT) > -1) {
        nx.path(data, inPath, value);
        inAppBase.$[inType] = data;
      } else {
        inAppBase.$[inType] = {
          [inPath]: value
        };
      }
    }
  }
}
