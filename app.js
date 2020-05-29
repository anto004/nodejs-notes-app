const validator = require("validator");
const getNotes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");

yargs
	.command({
		command: "add",
		desc: "Add a new note",
		builder: {
			title: {
				describe: "Note title",
				demandOption: true,
				type: "string",
			},
			body: {
				describe: "Note body",
				demandOption: true,
				type: "string",
			},
		},
		handler: function (argv) {
			console.log(
				`Note title is ${chalk.blue(
					argv.title
				)}\nNote body is ${chalk.blue(argv.body)}`
			);
		},
	})
	.command({
		command: "list",
		desc: "List all the notes",
		handler: function () {
			console.log("List all the notes");
		},
	})
	.command({
		command: "read",
		desc: "Read a note",
		builder: {
			title: {
				describe: "Note title",
			},
		},
		handler: function (argv) {
			console.log("Reading a note", argv);
		},
	})
	.command({
		command: "delete",
		desc: "Delete note",
		handler: function () {
			console.log("Deleting a note");
		},
	})
	.help().argv;
