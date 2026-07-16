# Tag Team Gauntlet — Television Update Test

This build adds the first television-style post-match presentation layer.

## Changes
- Critical Decision appears above the Match Broadcast, remains visible while active, and scrolls into view automatically.
- Legendary Team unlock screens scale to the available phone height so the cards, team name and Continue button remain accessible.
- A post-match Broadcast Interrupt can trigger a Featured Singles Challenge.
- The player chooses which member of the tag team accepts the singles match.
- Singles matches use the existing Story/Personality Engine and return to the classic Gauntlet reward loop after a win.
- Declining the challenge continues directly to rewards.
- A loss in either tag or singles competition still ends the Classic Gauntlet run unless Second Wind is available.

For testing, the first successful tag match always triggers a singles challenge. Later challenges use a lower random chance.
