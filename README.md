What is this?
---
It provides selectable extensions to make Array a little better.

How to use?
---
Let's choose the extension which you want.

### For example
```
import activate, {dedupe, nth, last} from 'array-extendable'

// Activating the extensions
activate(dedupe, nth, last)
```

What can do?
---
5 extensions are available.

### Extensions
- `#last`
  - Alias of last property.
- `#nth[n: number]`
  - Reversible index acceptable a negative value.
- `#unique(distinguish?: (former: T, latest: T) => boolean): T[]`
  - Method to extracts never duplicated values.
- `#dupes(distinguish?: (former: T, latest: T) => boolean): T[]`
  - Method to extracts duplicated values.
- `#dedupe(distinguish?: (former: T, latest: T) => boolean): T[]`
  - Method to remove duplicated values except first one.

---

Thank you for finding this library. Please report me anything if you notice.
