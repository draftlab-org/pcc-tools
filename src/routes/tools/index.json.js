const fetch = require("node-fetch");
import appConfig from "../../_helpers/app-config";

import processTools from "../_helpers/process-tools";
import sortByObjectKey from "../_helpers/sort-by-object-key";

export async function get(req, res, next) {
	let tools = [];

	await fetch(appConfig.directoryUrls.toolsApi)
		.then((result) => result.json())
		.then((json) => {
			console.log(json[0]);
			tools = json.map(processTools).sort(function (a, b) {
				return sortByObjectKey(a, b, "name");
			});
		});

	if (tools !== []) {
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(tools));
	} else {
		next();
	}
}
