# Security and data

## Approved account requirements

- Support multiple accounts, with the owner's account as the only initial account.
- Allow the owner to enable additional accounts later.
- Keep coffees, recipes, and brew history owned by their respective accounts.
- Provide email/password and Google sign-in.
- Both sign-in methods for the same verified email must resolve to one account and dataset through a secure linking flow.
- The owner manages an email allowlist through an admin screen. Account creation through either sign-in method requires an authorized email.
- Removing an email blocks further access and preserves the account and data. Reauthorizing it allows access to be restored.

The authentication provider, recovery, and identity-linking details remain open. See [DECISIONS.md](../../DECISIONS.md) and the [stage map](../planning/phases.md).
