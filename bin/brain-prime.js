#!/usr/bin/env node

import { rules, getData } from '../src/games/prime.js'
import { brainGameMekchanizm } from '../src/index.js'

brainGameMekchanizm(rules, getData)
