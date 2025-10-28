const DIRECTORY_URL = "https://directory.pcc.draftlab.dev";
const DIRECTORY_API_URL = DIRECTORY_URL + "/api";
const DIRECTORY_API_TOOLS_URL = DIRECTORY_API_URL + "/tools";

var config = (config = {
	directoryUrls: {
		root: DIRECTORY_URL,
		api: DIRECTORY_API_URL,
		toolsApi: DIRECTORY_API_TOOLS_URL,
	},
});

module.exports = config;
