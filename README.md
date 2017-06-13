What is this?
---
It provides selectable extensions to make Array a little better.

How to use?
---
Let's choose the extension which you want.

### For example
```
import extension, {dedupe, nth, last} from 'array-extendable'

// Activating the extensions
extension.attach(dedupe, nth, last)

// Deactivating the extensions
extension.attach('dedupe', 'last')
```

What can do?
---
5 extensions are available.

### Extensions
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
