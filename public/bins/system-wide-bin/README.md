# >_./add-bins

```text
 _______________________________________________________________________
|[] awesome-scripts                                            [Q][_][F]|
|"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""|"|
|awesome@scripts /bin > ./add-bins                                    | |
|                                                                     |_|
|_____________________________________________________________________|/|
```

</br>
</br>
</br>
</br>

## >_SHORT DESCRIPTION
Make individual bin executable system-wide.

</br>
</br>
</br>
</br>

## >_DESCRIPTION
This means the binary will be added to `/usr/local/bin`, which is in your
`$PATH` by default. Anything in your $PATH is available from anywhere in your
system.

Multiple binaries can be added at once. For this, please list them separated
by a single space.

> [!IMPORTANT]
> Don't forget to change the `BINS_DIR` constant to point to where your file is.

</br>
</br>
</br>
</br>

## >_USAGE
```bash
$ ./add-bins
💬 Which binary would you like to add? To add multiple binaries at once, please list them separated by a single space.
>_rimshot
# => Add 'rimshot' executable system-wide
```
```bash
$ ./add-bins
💬 Which binary would you like to add? To add multiple binaries at once, please list them separated by a single space.
>_rimshot open-repo
# => Add 'rimshot' and 'open-repo' executable system-wide
```

</br>
</br>
</br>
</br>

## >_OS SUPPORT
Linux and MacOS

</br>
</br>
</br>
</br>

## >_SOURCE
https://github.com/lsfernandes92/awesome-scripts/tree/main/public/bins/system-wide-bin/
