/* eslint-disable no-magic-numbers */

module.exports = {
	DEFAULT_CACHE_LIMIT_DAYS: 7,
	DEFAULT_GRAPH_MIN_RANGE: 30 * 24 * 60 * 60 * 1000, // 1 month
	DEFAULT_GRAPH_RANGE: 24 * 60 * 60 * 1000, // 1 day
	DEFAULT_REST_EVENT_LIMIT: 10,
	DEFAULT_REST_LIMIT: 100,
	DEFAULT_REFRESH_INTERVAL: 10000,
	DEFAULT_TIMEOUT: 10000,
	MILLIS: 1000,

	MAX_CACHED_VIEWS: 20,

	HTTP_OK: 200,
	HTTP_BAD_REQUEST: 400,
	HTTP_UNAUTHORIZED: 401,
	HTTP_FORBIDDEN: 403,
	HTTP_NOT_FOUND: 404,

	KEY_ENTER: 13,

	OPENNMS_UNKNOWN_VERSION: 0.0,
	MEMORY_THRESHOLD: 1000000000
};

/* eslint-enable no-magic-numbers */