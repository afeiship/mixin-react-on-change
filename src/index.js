import nx from '@jswork/next';
import EventMitt from '@jswork/event-mitt';

// classes
import '@jswork/next-local-storage';
import '@jswork/next-session-storage';

// packages
import '@jswork/next-camelize';
import '@jswork/next-capitalize';
import '@jswork/next-classify';
import '@jswork/next-camelize';
import '@jswork/next-compact-object';
import '@jswork/next-deep-assign';
import '@jswork/next-deep-clone';
import '@jswork/next-deep-each';
import '@jswork/next-deep-equal';
import '@jswork/next-empty';
import '@jswork/next-get2get';
import '@jswork/next-is-empty-object';
import '@jswork/next-is-plain-object';
import '@jswork/next-kebab-case';
import '@jswork/next-key-map';
import '@jswork/next-param';
import '@jswork/next-qs';
import '@jswork/next-sets';
import '@jswork/next-json';

const defaults = { prefix: 'nak' };

const NxWebToolkits = nx.declare('nx.WebToolkits', {
  statics: {
    create: function (inOptions) {
      return new this(inOptions);
    }
  },
  methods: {
    init: function (inOptions) {
      this.options = nx.mix(null, defaults, inOptions);
      this.initLocal();
      this.initEvent();
    },
    initLocal: function () {
      const { prefix } = this.options;
      nx.sets({ $local: new nx.LocalStorage(prefix) });
      nx.sets({ $session: new nx.SessionStorage(prefix) });
    },
    initEvent: function () {
      nx.sets({ $event: nx.mix(null, EventMitt) });
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxWebToolkits;
}

export default NxWebToolkits;
