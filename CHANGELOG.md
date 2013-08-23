# Livity Change Log

## Version 0.1.2

* simplistic LiveBehaviour.js and Main scene replaced by LiveGrapher demo

* decrease live code update throttle period to half a second for a more fluid experience

* bind ALT+SHIFT+ENTER to "Toggle maximized"

* current line can be transposed up or down with CTRL+SHIFT+UP and CTRL+SHIT+DOWN respectively

* support for tabfying selection (increases indentation of selection)

* only start completing identifiers after the 2nd character has been typed

* type inference for array initializers and simple array type references

* use smaller fonts by default to better match the overall Unity look'n'feel

* update GoTo Symbol popup when there are no matches

* Vimstalgia mode now binds SPACE key to "move right" like vim

## Version 0.1.1

* add Provider suffix to all language specific components to avoid conflicts with UnityScript and Boo builtin names

* REPL: ensure current line is valid before trying to navigate history

* properly handle multiple variable declarations per method

* GoToAsset should always focus the text editor window

* better keyword suggestion filtering for UnityScript

* completion for nested types

* method name is redundant in the description window

* use different defaults for Unity Pro and Unity Free skins

## Version 0.1.0

* Initial release
