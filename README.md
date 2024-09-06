# accces-control

## Introduction

This library is designed specifically for use in a monorepo. It is a simple wrapper that handles access control, using the principles of Gates to systematically and securely grant or deny access.

This library was inspired by the authorization methods from [Laravel](https://laravel.com/docs/10.x/authorization#gates)

## Requirements

- The library expects a `@custom/config/tsconfig.json`

## Installation

```
npm install @custom/access-control
```

## Usage

### Session type

The library uses the locals to pass the session. The locals can be adjusted in `src/app.d.ts`. An example is:

```typescript
declare global {
	namespace App {
		interface Locals {
			session: {
				user: {
					username: string;
				};
			};
		}
	}
}
```

### Gates

You can easily create gates yourself:

```typescript
import type { IGate } from '@jcb/access-control';

export function authorityGate(authorities: string[]): Gate {
	return (session: App.Local['session']) =>
		authorities.every((val) => session?.user?.authorities.includes(val) || false);
}
```

### Checking access

After the definition of your gates they can be used to check the access of a user. There are two functions exported. One which integrates with svelte-kit and one which can be used in any other framework.

```typescript
// *.svelte
import { page } from '$app/stores'

hasAccess($page.data.session, [
  authenticatedGate,
  new PolicyGate([Policies.USER_DETAIL])
])
```

```typescript
// +page.server.ts
import { authenticatedGate } from '@jcb/access-control'
import { hasAccessSvelte } from '@custom/access-control/lib/svelte'

export async function load({ locals }) {
  hasAccessSvelte(locals.session, [
    authenticatedGate,
    new PolicyGate([Policies.USER_DETAIL])
  ])
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This library is licensed under the [MIT License](LICENSE).

## Contact

Jessie Liauw A Fong - [github](github.com/jessielaf)
