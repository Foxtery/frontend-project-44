#!/usr/bin/env node

import { rules, getData } from '../src/games/calc.js'
import { brainGameMekchanizm } from '../src/index.js'

brainGameMekchanizm(rules, getData) // здесь остается только эта строчка
