import "@jswork/next-capitalize";

const STATE = "state";
const MEMORY = "memory";
const LOCAL = "local";
const SESSION = "session";

export default function () {
  return class {
    onChangeToState(inPath, inEvent) {
      const { value } = inEvent.target;
      const state = this.state;
      nx.set(state, inPath, value);
      return new Promise((resolve) => {
        this.setState(state, () => {
          resolve(state);
        });
      });
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
      const data = nx[`$${inType}`];
      const { value } = inEvent.target;
      nx.set(data, inPath, value);
      nx[`$${inType}`] = data;
      return Promise.resolve(data);
    }
  };
}
