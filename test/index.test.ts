import test from 'ava'
import extension, {head, last, nth, unique, duplicates} from '../src'

function createArray() {
  return [1, 2, 2, 3, 3, 3, 4]
}

test.before(t => {
  extension.attach(head, last, nth, unique, duplicates)
})

test('Array#head works as first index', t => {
  const array = createArray()

  t.is(array.head, array[0])
})

test('Array#last works as last index', t => {
  const array = createArray()

  t.is(array.last, array[array.length - 1])
})

test('Array#nth() able to access from last index with negative value', t => {
  const array = createArray()

  t.is(array.nth(-2), array[5])
})

test('Array#unique() removes duplicated values', t => {
  const array = createArray()

  t.deepEqual(array.unique(), [1, 2, 3, 4])
})

test('Array#duplicates() extracts duplicated values', t => {
  const array = createArray()

  t.deepEqual(array.duplicates(), [2, 2, 3, 3, 3])
})

test('ExtensionManager detaches a extension', t => {
  const array = createArray()

  t.truthy(array.head)

  extension.detach('head')

  t.falsy(array.head)
})
