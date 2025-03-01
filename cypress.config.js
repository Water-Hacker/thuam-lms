const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: "s2ao7z",
	adminPassword: "SITNI1110",
	testUser: "approvedthuram@gmail.com",
	defaultCommandTimeout: 20000,
	pageLoadTimeout: 15000,
	video: true,
	videoUploadOnPasses: false,
	retries: {
		runMode: 2,
		openMode: 0,
	},
	e2e: {
		baseUrl: "http://testui:8000",
	},
});
