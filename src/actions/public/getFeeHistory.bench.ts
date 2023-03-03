import { bench, describe } from 'vitest'

import { publicClient } from '../../_test'

import { getFeeHistory } from './getFeeHistory'

describe.skip('Get Fee History', () => {
  bench('viem: `getFeeHistory`', async () => {
    await getFeeHistory(publicClient, {
      blockCount: 2,
      rewardPercentiles: [25, 75],
    })
  })
})
