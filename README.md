# Slack Autocorrector
This is a very naive autocorrecting Slackbot that you can
run locally to search and replace on your own messages.

I created this to simplify typing out Jira tickets. When
typing out `FOO-123` I wanted it to be replaced with a
link to `FOO-123` without having to explicitly type that.

This library can not only do that, but replace any messages
as you wish.

## Configuration
Edit the `config.json` file -- you can copy the current
`sampleconfig.json` file. `config.json` is gitignored on
purpose.

Update the `token` property to a slack token with
`chat:user:write` permissions.

Update `replacements` with key/value pairs to search and
replace. For the JIRA replacement above, you can use:

    "[a-zA-Z]+-\\d+": "<https://YOURJIRA.jira.com/browse/$&|$&>"

## Installation and Running
`npm install` and `node .` are all you need.

## TODO
This currently does very naive replacements in somewhat
random order. It is potentially slow with a large number
of replacements.  It's also pretty much for exclusive,
personal use for one team. Ideally it could handle multiple
teams and multiple users.

This currently forces `parse: "none"` to allow you to
format URLs, but parsing may be desired at times.
