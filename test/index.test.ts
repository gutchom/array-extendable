import test from 'ava'
import activate, {last, nth, uniques, dupes, dedupe} from '../src'

function createArray() {
  return [1, 2, 2, 3, 3, 3, 4]
}

test.before(t => {
  activate(last, nth, uniques, dupes, dedupe)
})

test('Array#last works as last property', t => {
  const array = createArray()

  t.is(array.last, array[array.length - 1])
})

test('Array#nth() can access property with negative index', t => {
  const array = createArray()

  t.is(array.nth[-2], array[5])
})

test('Array#nth() can overwrite property', t => {
  const array = createArray()

  array.nth[-2] = 999

  t.is(array.nth[-2], 999)
})

test('Array#unique() extracts never duplicated values', t => {
  const array = createArray()

  t.deepEqual(array.uniques(), [1, 4])
})

test('Array#dupes() extracts duplicated values', t => {
  const array = createArray()

  t.deepEqual(array.dupes(), [2, 2, 3, 3, 3])
})

test('Array#dedupe() removes duplicated values', t => {
  const array = createArray()

  t.deepEqual(array.dedupe(), [1, 2, 3, 4])
})
