# CMSgov/qpp-measures-data context
> refreshed 2026-09-10 | upstream default: develop @ 959e9db7c3643c4db38e9711c5a6a0115370f4f4

## Identity & policies
- upstream: CMSgov/qpp-measures-data, default branch `develop`, primary language TypeScript, English-first (US English; CMSgov US gov).
- CLA/DCO: none (cla_required false, dco_required false).
- AI-assisted PR policy: allowed (bans_ai false, ai_disclosure_required false).
- signed commits required: no.
- PR template: `.github/PULL_REQUEST_TEMPLATE.md` (Related Tickets / Description / PR type / labels / tests / docs).
- external tracker: JIRA (jira.cms.gov / confluence.cms.gov). No ticket -> use QPPA-0000.

## Conventions (verified from merged PRs)
- branch naming: `QPPA-XXXXX-short-description` (JIRA ticket based); `feature/...` also seen. No ticket -> `QPPA-0000-<desc>`.
- commit style: conventional commits (`docs:`, `feat:`, `fix:`, `test:`, `chore:`).
- test command: `npm test` (jest + coverage, includes lint via pretest). lint: `npm run lint` (eslint scripts index.spec.ts).
- CI checks that gate merge: GitHub Actions `build` (tsc + unit tests), SonarQube `Quality Gate`, `enforce-pr-labels` (requires `notes:*` + `version:*` labels).
- how outside PRs get merged: squash merge into `develop`; maintainers (QPPA) approve.

## Maintainer picture
- CMSgov QPPA team; PRs merged via squash into develop. Responsive (recent external merges seen).

## Issue-area health
- Data-heavy repo (measures/benchmarks/mvp/clinical-clusters JSON). Docs are light (README, CONTRIBUTING, PR template).

## Gap ledger (dedupe — READ FIRST, never re-pick)
- `2026-08-05` test-coverage getProgramNamesEnum — pr-opened-locally-verified (fork PR #1, later closed).
- `2026-08-26` test-coverage — pr-closed-ci-blocked (fork PR #3; fork CI red: Quality Gate, build, check-version-labels).
- `2026-09-10` self-found doc typos (5 typos in README/CONTRIBUTING/PR template) — pr-opened (fork PR #12, branch QPPA-0000-fix-doc-typos). Fork CI red only at AWS OIDC credential step (fork lacks upstream secrets) — fork artifact, would pass upstream; labels notes:chore + version:patch added to satisfy enforce-pr-labels.

## Mined gaps (discovered, not yet attempted)
- `2026-09-10` scripts/measures/README.md line 19 references `npm run build:measures <year>` but no such npm script exists (only `init:measures`/`update:measures`); candidate stale-command fix, needs confirmation of intended command — status: proposed.
