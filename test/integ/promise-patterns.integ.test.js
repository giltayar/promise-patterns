import {describe, it} from 'mocha'
import chai, {expect} from 'chai'
import execa from 'execa'
import {jestSnapshotPlugin} from 'mocha-chai-jest-snapshot'
chai.use(jestSnapshotPlugin())

describe('promise-patterns (unit)', function () {
  it('should execute 01 correctly', async () => {
    expect((await execa('node', ['src/01-serial-execution.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 02 correctly', async () => {
    expect(
      (await execa('node', ['src/02-parallel-execution-promise-all.js'])).stdout,
    ).toMatchSnapshot()
  })

  it('should execute 03 correctly', async () => {
    expect((await execa('node', ['src/03-promise-all-and-map.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 03b correctly', async () => {
    expect((await execa('node', ['src/03b-throat.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 04 correctly', async () => {
    expect((await execa('node', ['src/04-background-execution.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 05 correctly', async () => {
    expect((await execa('node', ['src/05-rejection-and-catch.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 06a correctly', async () => {
    expect(
      (await execa('node', ['src/06a-unhandled-rejection.js'], {all: true}).catch((err) => err))
        .all,
    ).toMatchSnapshot()
  })

  it('should execute 06b correctly', async () => {
    expect(
      (await execa('node', ['src/06b-unhandled-rejection.js'], {all: true}).catch((err) => err))
        .all,
    ).toMatchSnapshot()
  })

  it('should execute 07 correctly', async () => {
    expect((await execa('node', ['src/07-presult.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 08 correctly', async () => {
    expect((await execa('node', ['src/08-sresult.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 09 correctly', async () => {
    expect(
      (await execa('node', ['src/09-unhandled-rejection-solution.js'])).stdout,
    ).toMatchSnapshot()
  })

  it('should execute 10 correctly', async () => {
    expect(
      (await execa('node', ['src/10-unwrap-presult.js'], {all: true}).catch((err) => err)).all,
    ).toMatchSnapshot()
  })
})
