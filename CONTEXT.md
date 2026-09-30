# CMSgov/qpp-measures-data context
> refreshed 2026-09-30 | upstream default: develop @ d216f5959e2e65bd57a8fc1adafc82c9ab48184a

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
- Recent merged PRs (2026-09-15..23): chetanmunegowda (`QPPA-0000: fix build issue`, `QPPA-12100: update measure 238`), john-manack (`QPPA-12052`, `QPPA-12053`), plus dependabot. Merge latency for maintainer PRs is ~1 day.
- Repo size: 96 stars, 0 open issues, 1 open PR (dependabot) as of this refresh. Small, data-focused, low issue traffic.

## Issue-area health
- Data-heavy repo (measures/benchmarks/mvp/clinical-clusters JSON). Docs are light (README, CONTRIBUTING, PR template).
- No open GitHub issues at refresh time, so any pick must be self-found (repo-audit).

## Gap ledger (dedupe — READ FIRST, never re-pick)
- `2026-08-05` test-coverage getProgramNamesEnum — pr-opened-locally-verified (fork PR #1, later closed).
- `2026-08-26` test-coverage — pr-closed-ci-blocked (fork PR #3; fork CI red: Quality Gate, build, check-version-labels).
- `2026-09-10` self-found doc typos (5 typos in README/CONTRIBUTING/PR template) — pr-opened (fork PR #12, branch QPPA-0000-fix-doc-typos). Fork CI red only at AWS OIDC credential step (fork lacks upstream secrets) — fork artifact, would pass upstream; labels notes:chore + version:patch added to satisfy enforce-pr-labels.
- `2026-09-30` self-found bug: legacy benchmarks/clinical-clusters schema `$ref` parse failure — pr-opened (fork PR #22, branch QPPA-0000-fix-legacy-schema-refs). Fix + regression test, 13 files, +56/-24. Fork CI red only at the `Configure AWS Credentials` OIDC step (build + Quality Gate) — fork artifact, would pass upstream; labels notes:bug-fix + version:patch added (had to create `notes:bug-fix` on the fork: the fork only carried `notes:chore` + `version:patch`).

## Mined gaps (discovered, not yet attempted)
- `2026-09-10` scripts/measures/README.md line 19 references `npm run build:measures <year>` but no such npm script exists (only `init:measures`/`update:measures`); candidate stale-command fix. Re-confirmed 2026-09-30 at d216f595: `build:measures` is still absent from package.json; `update:measures` (`scripts/measures/update-measures`) looks like the current equivalent. Note: commit a60d6da6 ("QPPA-6863 udpate documentation", 2022) renamed/added scripts here, so this is an old rename that the README was not updated for. Still needs care: confirm the line describes the `update:measures` flow before editing — status: proposed. (Trivial/doc type: do NOT fold into a code PR.)
- `2026-09-30` legacy schema `$ref` gap — status: attempted (see Gap ledger, fork PR #22). Do not re-pick.
