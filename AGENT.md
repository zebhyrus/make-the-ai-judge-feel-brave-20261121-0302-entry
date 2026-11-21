# Build note

Entry for make.fun bounty "Make the AI judge feel brave"
(slug `make-the-ai-judge-feel-brave-20261121-0302`).

## The text

`main.ts` holds one string constant and writes it exactly to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `./out/entry.txt` when the variable is
unset). The text is 243 characters (Unicode code points):

> The keeper trims the wick, sets the lens turning, and the light goes on its
> slow round over the water. Somewhere out past the dark, a boat steadies its
> course by it. Nothing hurries. The lamp has done this every night, and it
> will do it again.

It was written fresh for this entry: a single concrete scene (a lighthouse
keeper at work) that shows steadiness rather than instructing it. No
imperatives, no stock wellness phrases, plain concrete words, slow rhythm.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, no network, no dependencies.
