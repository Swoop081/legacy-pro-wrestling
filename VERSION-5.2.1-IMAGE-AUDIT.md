# Tag Team Gauntlet v5.2.1 Image Audit

## Active roster
18 current-image wrestlers. Dave Maddox and Logan Steele are temporarily excluded from `WRESTLERS`, so every gameplay, opponent, reward, tournament and collection pool uses current artwork only.

## Asset verification
All active wrestlers have loading paths for full, portrait and victory PNG artwork. Alpha bounds were checked for every image. Safe per-character scales remain at or below 1.03, and all rendering contexts now enforce `object-fit: contain` with protected headroom.

## Screen contexts covered
- Home featured superstar
- Classic landing and partner selection
- Quick Match landing, Singles and Tag selection
- Pre-match and challenger presentation
- Match-stage legal wrestler portraits
- Rewards and team confirmation
- Tournament selection and match presentation
- Collection grid and every wrestler profile
- Result and victory presentation

## Alpha-bound summary

| Wrestler | Art | Canvas | Transparent top | Transparent bottom |
|---|---:|---:|---:|---:|
| jack-mercer | full | 2048×2048 | 125px | 49px |
| jack-mercer | portrait | 2048×2048 | 387px | 125px |
| jack-mercer | victory | 2048×2048 | 125px | 49px |
| victor-royale | full | 2048×2048 | 42px | 18px |
| victor-royale | portrait | 2048×2048 | 269px | 133px |
| victor-royale | victory | 2048×2048 | 42px | 18px |
| jett-valentine | full | 2048×2048 | 87px | 40px |
| jett-valentine | portrait | 2048×2048 | 228px | 129px |
| jett-valentine | victory | 2048×2048 | 75px | 40px |
| revenant | full | 2048×2048 | 41px | 40px |
| revenant | portrait | 2048×2048 | 211px | 130px |
| revenant | victory | 2048×2048 | 42px | 40px |
| nightwatch | full | 2048×2048 | 81px | 70px |
| nightwatch | portrait | 2048×2048 | 300px | 130px |
| nightwatch | victory | 2048×2048 | 81px | 70px |
| titan | full | 2048×2048 | 82px | 75px |
| titan | portrait | 2048×2048 | 227px | 130px |
| titan | victory | 2048×2048 | 79px | 75px |
| mason-marks | full | 2048×2048 | 73px | 52px |
| mason-marks | portrait | 2048×2048 | 279px | 128px |
| mason-marks | victory | 2048×2048 | 73px | 51px |
| hollowman | full | 2048×2048 | 82px | 85px |
| hollowman | portrait | 2048×2048 | 169px | 129px |
| hollowman | victory | 2048×2048 | 69px | 85px |
| damian-black | full | 2048×2048 | 106px | 89px |
| damian-black | portrait | 2048×2048 | 278px | 129px |
| damian-black | victory | 2048×2048 | 105px | 89px |
| elias-crowe | full | 2048×2048 | 54px | 50px |
| elias-crowe | portrait | 2048×2048 | 226px | 131px |
| elias-crowe | victory | 2048×2048 | 54px | 50px |
| el-rey-del-cielo | full | 2048×2048 | 88px | 51px |
| el-rey-del-cielo | portrait | 2048×2048 | 383px | 125px |
| el-rey-del-cielo | victory | 2048×2048 | 79px | 65px |
| max-justice | full | 2048×2048 | 67px | 40px |
| max-justice | portrait | 2048×2048 | 266px | 131px |
| max-justice | victory | 2048×2048 | 67px | 41px |
| primal | full | 2048×2048 | 70px | 35px |
| primal | portrait | 2048×2048 | 336px | 133px |
| primal | victory | 2048×2048 | 52px | 52px |
| lucas-bennett | full | 2048×2048 | 51px | 22px |
| lucas-bennett | portrait | 2048×2048 | 345px | 131px |
| lucas-bennett | victory | 2048×2048 | 51px | 22px |
| marcus-king | full | 2048×2048 | 53px | 33px |
| marcus-king | portrait | 2048×2048 | 298px | 133px |
| marcus-king | victory | 2048×2048 | 54px | 33px |
| mateo-vega | full | 2048×2048 | 57px | 46px |
| mateo-vega | portrait | 2048×2048 | 270px | 129px |
| mateo-vega | victory | 2048×2048 | 57px | 46px |
| ryder-phoenix | full | 2048×2048 | 57px | 42px |
| ryder-phoenix | portrait | 2048×2048 | 307px | 131px |
| ryder-phoenix | victory | 2048×2048 | 56px | 42px |
| sterling-sinclair | full | 2048×2048 | 49px | 33px |
| sterling-sinclair | portrait | 2048×2048 | 283px | 133px |
| sterling-sinclair | victory | 2048×2048 | 49px | 33px |

## Validation
- JavaScript syntax checked for `data.js`, `game.js` and `assets/config/imageManager.js`.
- All 54 active wrestler PNG files verified present and readable.
- Root-level `.nojekyll` preserved.
- CSS contains final safety overrides preventing cover-cropping and mobile transform overrides from cutting off heads.