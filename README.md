Tracking changes in many CMSs, like WordPress, can be a pain.
It's not always clear how a change in the configuration will be used throughout the code.
No git history.

# Dwindle
Code <-> DB

## Usage
- meteor add marvin:dwindle
- Put template files in the `dwindle/` directory in the project's root.
- On startup, Dwindle will scan the directory for tags in the format `[[id|lastVal]]`
- **id** should be in the format `some.id.name`
- **lastVal** is either the last value saved to the DB or something new set by the programmer. If its new, it will overwrite the value in the DB at startup.
- Go to `example.com/dwindle` to modify the db. 
