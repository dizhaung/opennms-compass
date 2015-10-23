/**
 * LokiJS StorageSyncAdapter
 * @author Benjamin reed <ranger@opennms.org>
 *
 * A JSONStorage sync adapter example for LokiJS
 */

/*jslint browser: true, node: true, plusplus: true, indent: 2 */

function JSONSyncAdapterError() {
  'use strict';
}

JSONSyncAdapterError.prototype = new Error();

function JSONSyncAdapter(options) {
  'use strict';
  console.log('LokiJS JSONSyncAdapter initializing.');
  window.plugins.JSONStorage.setDefaultBackend('local');
  this.options = options;
}

JSONSyncAdapter.prototype.getName = function(name) {
  'use strict';
  return ((this.options && this.options.prefix)? this.options.prefix : '') +
    name +
    ((this.options && this.options.suffix)? this.options.suffix : '');
};

JSONSyncAdapter.prototype.saveDatabase = function (name, data, callback) {
  'use strict';
  var fileName = this.getName(name);
  console.log('LokiJS JSONSyncAdapter: saveDatabase: ' + fileName);
  // lokijs actually passes us a stringified JSON string, but JSONStorage expects an object
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  window.plugins.JSONStorage.writeFile(fileName, data, function(res) {
    console.log('save succeeded: ' + JSON.stringify(res));
    callback(null);
  }, function(err) {
    console.log('save failed: ' + JSON.stringify(err));
    callback(new JSONSyncAdapterError(err));
  });
};

JSONSyncAdapter.prototype.loadDatabase = function (name, callback) {
  'use strict';
  var fileName = this.getName(name);
  console.log('LokiJS JSONSyncAdapter: loadDatabase: ' + fileName);
  window.plugins.JSONStorage.readFile(fileName, function(res) {
    if (res.success) {
    // JSONStorage returns a JSON object, but lokijs expects it stringified
      callback(JSON.stringify(res.contents));
    } else {
      callback(new JSONSyncAdapterError('Unknown error occurred.  Result was: ' + JSON.stringify(res)));
    }
  }, function(err) {
    console.log('load failed: ' + JSON.stringify(err));
    callback(new JSONSyncAdapterError(err));
  });
};

window.jsonSyncAdapter = JSONSyncAdapter;