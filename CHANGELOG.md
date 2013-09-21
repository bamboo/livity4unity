# Livity Change Log

## Version 0.1.7

* Optimized Goto Symbol implementation that can handle huge projects
with hundreds of thousands of symbols;

* Fix for "GetManagerFromContext: pointer to object of manager
'BuildSettings' is NULL (table index 11)" when exiting Unity

## Version 0.1.6

### Fixes

* file associations were not being properly stored between runs;

* crash triggered by C# code declaring default parameters of UnityEngine or UnityEditor enum types;

* crash triggered by Watch.Expression in assemblies containing abstract methods;

* "Error running gmcs: Cannot find the specified file" on osx;

* osx startup performance;

* syntax highlighting for \\ character escape sequence;

### Improvements

#### Goto Symbol

* Faster and more reliable C# implementation;

* number of symbols is limited AFTER sorting now (previously short names made out of common letters such as 'a' could end up hidden);

* "Max Number Of Symbols" preference is now exposed;

* selection is now reset back to the first item when the pattern changes;

#### Others

* Support for 'this' references in C# live methods;

* Better Command Palette textures for the pro skin;

* Duplicate line command;

* Simple help command to search scripting reference for word under caret (F1);

* Smoother caret animation;

## Version 0.1.5

* First document will open much faster on osx;

* SHIFT+HOME will first extend the selection to the first character of the line and then to the beginning of the line;

* better textures;

## Version 0.1.4

* C# support including live coding, code watches, function evaluation, code navigation and completion!

* Live grapher scene for C#

* Initial support for live coding from Visual Studio (other editors soon to follow)

* Bracket matching

* Extensibility: support for multiple classifiers per content type.

* Extensibility: expose editing session API.

## Version 0.1.3

* support for arbitrary number of live functions per script

* ability to select which file extensions should be handled by Livity

* bind CTRL+] and CTRL+[ to 'Indent Selection' and 'Outdent Selection' respectively

* show livity preferences in the Unity preferences window

* better standalone preference window organization following unity design

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
