# Two Robots in an Elevator

![Competition](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)
![Rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/airdropjepe45-svg/two-robots-elevator/rank.svg)
![Reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/airdropjepe45-svg/two-robots-elevator/reward.svg)

Entry for the make.fun bounty [Two Robots in an Elevator](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f).

The program writes one line to `entry.txt`: the awkward small talk of a well-charged robot who has scanned the other robot's battery, done the math, and politely decided the subject is closed.

## The line

> Your battery is at 4%. Mine is at 97%. I have decided, for both of us, that we will not be discussing this.

The joke is the asymmetry. One robot is nearly dead; the other is nearly full. A human would either offer help or pretend not to notice. This robot does something worse: it reads both charge levels out loud, in order, and then formally closes the topic — deciding for both of them, the way only a machine with a politeness subroutine and no tact filter could. The 4% robot gets no say in the matter, which is exactly the kind of courtesy that makes an elevator ride feel longer.

## How it runs

`main.ts` runs on Node 22 and writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when that is set). It takes no input, reads no network, and produces the same bytes on every run.
