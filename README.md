# accces-control

## Introduction

This library is designed specifically for use in a monorepo. It is a simple wrapper that handles access control, using the principles of Gates to systematically and securely grant or deny access.

This library was inspired by the authorization methods from [Laravel](https://laravel.com/docs/10.x/authorization#gates)

## Requirements

- The library expects a `@custom/config/tsconfig.json`
- The library has `@auth/core` and `@svelte/kit` as peerDependencies

## Installation

```
npm install @custom/access-control
```

## Usage

### Gates

Gates determine if a user is authorized to access a function. Right now only one gate is provided:
 
| Gate                | Description                                         |
|---------------------|-----------------------------------------------------|
| `authenticatedGate` | Authenticated gate checks if the user has a session |

You can easily create gates yourself:

```typescript
import type { Session } from '@auth/core/types';
import type { IGate } from '@jcb/access-control';

enum Policies {
	USER_ADD,
	USER_EDIT,
	USER_DELETE,
	USER_LIST,
	USER_DETAIL,
}

class PolicyGate implements IGate {
	policies: Policies[];

	constructor(policies: Policies[]) {
		this.policies = policies;
	}

	hasAccess = (session: Session | null) => {
		if (session?.user?.isSuperUser) return true;

		return this.policies.every((val) => session?.policies.includes(Policies[val]) || false);
	};
}
```

### Checking access

After the definition of your gates they can be used to check the access of a user. There are two functions exported. One which integrates with svelte-kit and one which can be used in any other framework.

```typescript
// *.svelte
import { page } from '$app/stores';

hasAccess($page.data.session, [
    authenticatedGate,
    new PolicyGate([Policies.USER_DETAIL])
]);
```

```typescript
// +page.server.ts
import { authenticatedGate } from '@jcb/access-control';
import { hasAccessSvelte } from '@custom/access-control/lib/svelte';

export const load = (async ({ locals }) => {
	hasAccessSvelte(await locals.getSession(), [
		authenticatedGate,
		new PolicyGate([Policies.USER_DETAIL])
	]);
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This library is licensed under the [MIT License](LICENSE).

## Contact

Jessie Liauw A Fong - [github](github.com/jessielaf)
