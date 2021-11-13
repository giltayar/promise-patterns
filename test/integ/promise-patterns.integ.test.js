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
    expect((await execa('node', ['src/05a-rejection-and-catch.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 06a correctly', async () => {
    expect(
      (await execa('node', ['src/05b-unhandled-rejection.js'], {all: true}).catch((err) => err))
        .all,
    ).to.include('Error: 404 NOT FOUND')
  })

  it('should execute 06b correctly', async () => {
    expect(
      (await execa('node', ['src/05c-unhandled-rejection.js'], {all: true}).catch((err) => err))
        .all,
    ).toMatchSnapshot()
  })

  it('should execute 07 correctly', async () => {
    expect((await execa('node', ['src/06a-presult.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 08 correctly', async () => {
    expect((await execa('node', ['src/06b-sresult.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 09 correctly', async () => {
    expect(
      (
        await execa('node', ['src/07a-unhandled-rejection-solution.js'], {all: true}).catch(
          (err) => err,
        )
      ).all,
    ).to.include('Error: 404 NOT FOUND')
  })

  it('should execute 10 correctly', async () => {
    expect(
      (await execa('node', ['src/07b-unwrap-presult.js'], {all: true}).catch((err) => err)).all,
    ).toMatchSnapshot()
  })

  it('should execute 11a correctly', async () => {
    expect((await execa('node', ['src/11a-streams-with-callbacks.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 11b correctly', async () => {
    expect((await execa('node', ['src/11b-streams-with-promises.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 11c correctly', async () => {
    expect((await execa('node', ['src/11c-streams-with-promises.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 08a correctly', async () => {
    expect((await execa('node', ['src/08a-event-emitter-listener.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 08b correctly', async () => {
    expect((await execa('node', ['src/08b-event-emitter-once.js'])).stdout).toMatchSnapshot()
  })

  it('should execute 08c correctly', async () => {
    expect(
      (await execa('node', ['src/08c-event-emitter-once-implementation-try.js'])).stdout,
    ).toMatchSnapshot()
  })

  it('should execute 08d correctly', async () => {
    expect(
      (
        await execa('node', ['src/08d-event-emitter-once-implementation-try-2.js'], {
          all: true,
        }).catch((err) => err)
      ).all,
    ).to.include('promise.resolve is not a function')
  })

  it('should execute 08e correctly', async () => {
    expect(
      (await execa('node', ['src/08e-event-emitter-once-naked-promise-implementation.js'])).stdout,
    ).toMatchSnapshot()
  })

  it('should execute 13a correctly', async () => {
    const start = Date.now()

    expect((await execa('node', ['src/13a-mutex.js'])).stdout).toMatchSnapshot()

    expect(Date.now() - start).to.be.above(2000)
  })

  it('should execute 13b correctly', async () => {
    const start = Date.now()

    expect((await execa('node', ['src/13b-naked-promise-mutex.js'])).stdout).toMatchSnapshot()

    expect(Date.now() - start).to.be.above(2000)
  })
})
