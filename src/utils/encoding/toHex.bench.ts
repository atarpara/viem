import { hexlify, toUtf8Bytes } from 'ethers/lib/utils'
import {
  toBeHex,
  hexlify as hexlifyV6,
  toUtf8Bytes as toUtf8BytesV6,
} from 'ethers@6'
import { bench, describe } from 'vitest'

import { bytesToHex, numberToHex, stringToHex } from './toHex'

describe.skip('Number to Hex', () => {
  bench('viem: `numberToHex`', () => {
    numberToHex(52)
  })

  bench('ethers@5: `hexlify`', () => {
    hexlify(52)
  })

  bench('ethers@6: `hexlify`', () => {
    toBeHex(52)
  })
})

describe('String to Hex', () => {
  bench('viem: `stringToHex`', () => {
    stringToHex('Hello world.')
  })

  bench('ethers@5: `hexlify`', () => {
    hexlify(toUtf8Bytes('Hello world.'))
  })

  bench('ethers@6: `hexlify`', () => {
    hexlifyV6(toUtf8BytesV6('Hello world.'))
  })
})

describe('Bytes to Hex', () => {
  bench('viem: `bytesToHex`', () => {
    bytesToHex(
      new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]),
    )
  })

  bench('ethers@5: `hexlify`', () => {
    hexlify(
      new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]),
    )
  })

  bench('ethers@6: `bytesToHex`', () => {
    hexlifyV6(
      new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]),
    )
  })
})
