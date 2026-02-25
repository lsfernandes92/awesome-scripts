# >_ Awesome Scripts

This website contains a modest collection of **scripts** I've written. Built with **HTML** + plain **JS** and **CSS**.

_To make things easier, here, the terms **script**, **executable**, **bin** and **binary** mean the same thing._

These scripts aim to automate tasks and set shortcuts whether for productivity or fun. They are like **executables** that you can run by calling the script name.

```text
                       .,,uod8B8bou,,.
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||
         !.......:!?|||||!!^^""'            ||||
         !.........||||                     ||||
         !.........||||  ##                 ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         `.........||||                    ,||||
          .;.......||||               _.-!!|||||
   .,uodWBBBBb.....||||       _.-!!|||||||||!:'
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   `.
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     `.
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"`;:::       `.
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
`..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
  `..........:::::::::::::::::::::::;iof688888888888b.     `YBBBP^'
    `........::::::::::::::::;iof688888888888888888888b.     `
      `......:::::::::;iof688888888888888888888888888888b.
        `....:::;iof688888888888888888888888888888888899fT!
          `..::!8888888888888888888888888888888899fT|!^"'
            `' !!988888888888888888888888899fT|!^"'
                `!!8888888888888888899fT|!^"'
                  `!988888888899fT|!^"'
                    `!9899fT|!^"'
                      `!^"'

```
</br>
</br>
</br>
</br>

## >_FAQ
### What's a script BTW?

> It's a file containing a series of terminal **commands** that your shell can execute.

### What's a shell? Which is the most common?

> It's a software that **interprets** cli commands. You can use multiple shells and each has its own characteristics. The most common shell is **bash**.

### What's bash? What are the pros?

> Stands for **bourne again shell**, a software to interpret cli commands. It's also an extended version of the **unix bourne shell (sh)**.
>
> The pros of using bash are:
>
> (+) **Popularity**
>
> (+) **Default** shell in many linux distros

### What's the shebang at the beginning of a file?

> It's commonly used in script files. It starts with **#!** and tells the system which **interpreter** to use.

### Which shebang should you use?

> I recommend using `#!/usr/bin/env <INTERPRETER>` because it's portable. The **env** command exists on Unix-like systems. It's a utility program that manages environment variables, finds and execute programs using $PATH, so it depends on your **$PATH**.
>
> Alternatively, use the fixed path `#!/bin/bash` when you need the system bash and want to avoid $PATH manipulation. This works on both MacOS and Linux. 
>
> Although, I see the shebang line more as an indication for the user who will run the script.

### Where to store system-wide scripts?

> I recommend that you use `/usr/local/bin/` because it's the most common location for executables that aren't managed by your package manager. Additionally, it's in the default $PATH.
>
> Alternatively, for user-specific scripts use `~/.local/bin` (you may need to add this to your $PATH).
>
> You can also store it somewhere else and symlink to `/usr/local/bin/`. In the end, it's totally up to your preferences.

### When using rbenv, can I store my script in the shim folder?

> You can do that, but I don't recommend it. Each ruby version managed by rbenv has its own `<PATH_TO_SHIM_DIR>/bin` folder, so a script might not be available for your current ruby version unless you set it up.

### Can I save my scripts without file extension?
> Yes, the file extension it's purely informational. Actually, the shebang at the beginning of a file is what determines which interpreter to use.

### So, this is basicaly a commandlinefu.com clone?

> Yes! I didn’t even know this existed before I made this, [I swear](https://www.reddit.com/r/commandline/comments/1gvsbiy/comment/ly68zm8/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) 😅

</br>
</br>
</br>
</br>

## >_Themes

These are my fav themes from highlight.js:

* tokyo-night-dark
* nord
* ir-black
* hybrid
* gradient-dark
* gml
* github-dark-dimmed
* felipec
