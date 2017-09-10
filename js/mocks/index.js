import {repositories} from './repositories.mock';

const apiMock = {
  createError (type, url) {
    return Promise.reject(new Response(`${type} mock for ${url} not implemented`));
  },

  waitFor (promise) {
    const delay = 1200;
    const timeout = new Promise(resolve => setTimeout(resolve, delay));

    return Promise.all([promise, timeout]).then(([arg]) => arg);
  },

  getLibraries () {
    return Promise.resolve({repositories});
  },
  getMock (url) {
    const rules = [
      {
        parsedUrl: url.match(/search\?(.*)$/),
        method: this.getLibraries
      }
    ];

    const matchedRule = rules.find(rule => !!rule.parsedUrl);

    return matchedRule ? matchedRule.method(matchedRule.parsedUrl) : this.createError('GET', url);
  },

  postMock (url) {
    return createError('POST', url);
  },

  putMock (url) {
    return createError('PUT', url);
  },

  deleteMock (url) {
    return createError('DELETE', url);
  },

  get (...args) {
    return this.waitFor(this.getMock(...args));
  },

  post (...args) {
    return this.waitFor(this.postMock(...args));
  },

  put (...args) {
    return this.waitFor(this.putMock(...args));
  },

  delete (...args) {
    return this.waitFor(this.deleteMock(...args));
  }
};

export default apiMock;
