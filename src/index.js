import nx from 'next-js-core2';
import 'next-capitalize';

const DOT = '.';
const STATE = 'state';
const MEMORY = 'memory';
const LOCAL = 'local';
const SESSION = 'session';

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

    onChangeToMemory(inPath, inValue) {
      return this.onChangeTo(MEMORY, inPath, inValue);
    }

    onChangeToLocal(inPath, inValue) {
      return this.onChangeTo(LOCAL, inPath, inValue);
    }

    onChangeToSession(inPath, inValue) {
      return this.onChangeTo(SESSION, inPath, inValue);
    }

    onChangesToState(inObject) {
      return this.onChangesTo(STATE, inObject);
    }

    onChangesToMemory(inObject) {
      return this.onChangesTo(MEMORY, inObject);
    }

    onChangesToLocal(inObject) {
      return this.onChangesTo(LOCAL, inObject);
    }

    onChangesToSession(inObject) {
      return this.onChangesTo(SESSION, inObject);
    }

    onChangesTo(inType, inObject) {
      const promiseList = nx.map(inObject, (key, value) => {
        return this[`onChangeTo${nx.capitalize(inType)}`](key, value);
      });
      return Promise.all(promiseList);
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
      return new Promise((resolve) => {
        resolve();
      });
    }

  }
}
