# LEGACY Pro Wrestling v8.1.2.6 Build 1.5

## Fix
Screens 3 and 4 of Career onboarding were sitting roughly 70px higher than Screens 1 and 2 on iPhone. The onboarding renderer now emits a stable page class, and only pages 3 and 4 receive a 72px mobile top offset. Image size is unchanged.

## Test
1. Open Career and progress through all four onboarding screens.
2. Confirm Screen 3 artwork begins at the same visual height as Screen 1.
3. Confirm Screen 4 portrait begins at the same visual height as Screen 2.
4. Back out to Career, select Begin Career, and repeat.
5. Confirm no Career screen displays the streak header.
