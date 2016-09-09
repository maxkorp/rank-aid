
###formulae

`newRank = oldRank + gamesPlayedModifier * degreeOfVictory * (didWin - oddsOfWinning)`

`gamesPlayedModifier = Math.max(16, Math.min((800 / gamesEverPlayedByPlayer), 80))`

```
degreeOfVictory =
  (totalNumberOfWinnersStocksLeftAllRounds - totalNumberOfLosersStocksLeftAllRounds
+ ((numberOfRoundsWonbyWinner - numberOfRoundsLostByWinner) * numberOfStocksPerRound)
+ (minimumNumberOfRoundsPerSet * numberOfStocksPerRound * 2))
/ 11

```

`didWin = {0 if lost, 1 if won}`

`oddsOfWinning = 1/(1 + 10 ^ ((opponentsOldRank - oldRank) / 400))`

All formulae except for the addition of `degreeOfVictory` were taken from
[elorankings.com](http://elorankings.com/).

####Reasoning for degreeOfVictory
The original formula from elorankings doesn't take into account how strongly
somebody wins. For example, 3 stocking somebody twice is a much bigger win than
getting 3 stocked once, then beating them the remaining to rounds with 1 stock left.

The addition of the second line of the formula prioritizes winning a round over
taking stocks; for example, if playing 3 stocks, best of 5, if you won 3 rounds
with 1 stock left, and the opponent won 2 rounds with 3 stocks left, you would
end up with`(3 * 1) - (2 * 6) = -3`. By adding an additional score of the total
possible number of stocks left, the loser's stock advantage can never outweigh
the fact that the winner won.

This still leaves things a bit off however. In a 2 stock, best of 3 set,
if a player won every time with 1 stock left, that would be `(1 * 2) + (2 * 2) = 6`.
If the same set had a 2 stock win by the overall loser, that would be
`(1 * 2) - (2 * 1) + ((2 - 1) * 2) = 2`. I would argue that the round where the
winner got 2 stocked doesn't mean the overall win was 1/3 as big.
By adding a factor of the optimal number of stocks left for the winner we can
gain a more reliable factor. Those 2 matches become
`(1 * 2) + (2 * 2) + (2 * 2) = 10` and
`(1 * 2) - (2 * 1) + ((2 - 1) * 2) + (2 * 2) = 6`; not quite half as bad.
If we assume straight wins we get
`(2 * 2) + (2 * 2) + (2 * 2) = 12`.
Comparing best of 3 and best of 5, we get
`(1 * 3) + (2 * 3) + (2 * 3) = 15`; this is 50% better than the same results for
a best of 3.
When you factor in the loser 2 stocking twice, we get
`(1 * 3) - (2 * 2) + ((3 - 2) * 2) + (2 * 3) = 7`; just over half has bad.
Now we have these numbers, but do we just want to always raise our elo by a factor
of 6 or so times more than usual? No, so we need to reduce them to a base case.
I've chosen, a 2 stock best of 3 set, where the loser wins a round, and each round
ends with 1 stock left. `(1 * 2) - (1 * 1) + ((2 - 1) * 2) + (2 * 2) = 7`,
Our first case (2 stock best of 3, winner wins first 2 rounds with 1 stock left)
is a bit better; a final factor of 1.43. The case where the loser 2 stocks once becomes
0.86. The winner 2 stocking twice in a row becomes 1.71. A best of 5 with a tight
bracket (3 wins 2 losses 1 stock each) becomes 1.28, a bit tighter than
winning 2 sets best of 3.
