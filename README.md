# Breach Alerts Prototype

This is an addon that I'm going to be using for prototyping an upcoming feature in Firefox that notifies users when their credentials have possibly been involved in a data breach.
I chose to make it a legacy addon to make it easy to port into mozilla-central in the future - it will likely involve window manipulation code.

## Try it yourself

```
$ git clone https://github.com/nhnt11/BreachAlerts.git
$ cd BreachAlerts
$ ./package.sh # This creates a .xpi file in the dist/ folder
```

Then, in Firefox:
1. Navigate to about:config
2. Search for the extensions.legacy.enabled pref and change the value to true
3. Navigate to about:debugging
4. Click the "Load Temporary Add-on" button, and select the .xpi created by package.sh (/path/to/clone/BreachAlerts/dist/BreachAlerts.xpi)

Currently, functionality is limited to showing a notification bar when you visit a site known by haveibeenpwned.com to have been breached.
