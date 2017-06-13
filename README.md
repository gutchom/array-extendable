What is this?
---
It provides selectable extensions to make Array a little better.

How to use?
---
Let's choose the extension which you want.

### For example
```
import extend, {dedupe, nth, last} from 'array-extendable'

extend(unique, nth, last)
```

What can do?
---
5 extensions are available.

- `head`
  - Property of alias to first index.
- `last`
  - Property of alias to last index.
- `nth(n: number): T`
  - Method able to access from last index with negative value.
- `unique(predicate?: (current: T, first: T) => boolean): T[]`
  - Method to remove duplicated values except first one.
- `duplicates(predicate?: (current: T, first: T) => boolean): T[]`
  - Method to extracts duplicated values.

---

Thank you for finding this library. Please report me anything if you notice.