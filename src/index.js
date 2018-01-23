import nx from 'next-js-core2';

const DOT = '.';

export default function (inAppBase) {
  return class {
    onChangeToState(inPath, inValue) {
      const data = nx.path(this.state, inPath);
      if (inPath.indexOf(DOT) > -1) {
        nx.path(data, inPath, inValue);
        this.setState({[inPath]: data})
      } else {
        this.setState({inPath: inValue});
      }
    }
    onChangeToMemory(inPath, inValue) {
      this.onChangeTo('memory', inPath, inValue);
    }
    onChangeToLocal(inPath, inValue) {
      this.onChangeTo('local', inPath, inValue);
    }
    onChangeToSession(inPath, inValue) {
      this.onChangeTo('session', inPath, inValue);
    }
    onChangeTo(inType, inPath, inValue) {
      const data = inAppBase.$[inType];

      if (inPath.indexOf(DOT) > -1) {
        nx.path(data, inPath, inValue);
        inAppBase.$[inType] = data;
      } else {
        inAppBase.$[inType] = {
          [inPath]: inValue
        };
      }
    }
  }
}
