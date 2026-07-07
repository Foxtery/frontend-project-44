#!/usr/bin/env node

import { rules, getData } from '../src/games/gcd.js'
import { brainGameMekchanizm } from '../src/index.js'

brainGameMekchanizm(rules, getData)
