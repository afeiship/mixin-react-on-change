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
        return new Promise((resolve) => {
          this.setState(this.state, () => {
            resolve();
          });
        });
      } else {
        return new Promise((resolve) => {
          this.setState({ [inPath]: value }, () => {
            resolve();
          });
        });
      }
    }

    onChangeToStates(inObject) {
      const { value } = inEvent.target;
      const promiseList = nx.map( inObject ,(key, value)=>{
        return this.onChangeToState(key,value);
      });
      return Promise.all(promiseList);
    }

    onChangeToMemory(inPath, inValue) {
      return this.onChangeTo(MEMORY, inPath, inValue);
    }

    onChangeToLocal(inPath, inValue) {
      return this.onChangeTo(LOCAL, inPath, inValue);
    }

    onChangeToSession(inPath, inValue) {
      return this.onChangeTo(SESSION, inPath, inValue);
    }

    onChangeToStore(inType, inObject){
      nx.each(inObject, (key, value)=>{
        this.onChangesTo(inType, key, value);
      });
      return new Promise((resolve) => {
        resolve();
      });
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
      return new Promise((resolve)=>{
        resolve();
      });
    }

  }
}
