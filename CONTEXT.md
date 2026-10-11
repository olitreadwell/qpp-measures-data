# CMSgov/qpp-measures-data context
> refreshed 2026-10-11 | upstream default: develop @ ff166ff70c066bc49da72294bceb21b2118bda36 (QPPA-12073 SonarQube exclusions)
> recheck 2026-10-11: prior refresh 2026-10-03 @ ff58dff0 was 8 days old (>= `context_branch_max_age_days` 7) and develop had moved. Live-verified: archived=false, default=develop, open issues 0, open PRs 0 (upstream), last push 2026-10-09. Policy passport re-confirmed unchanged (bans_ai=false, ai_disclosure_required=false, cla_required=false, dco_required=false, signed_commits_required=false).

## Identity & policies
- upstream: CMSgov/qpp-measures-data, default branch `develop`, primary language TypeScript, English-first (US English; CMSgov US gov).
- CLA/DCO: none (cla_required false, dco_required false).
- AI-assisted PR policy: allowed (bans_ai false, ai_disclosure_required false).
- signed commits required: no.
- PR template: `.github/PULL_REQUEST_TEMPLATE.md` (Related Tickets / Description / PR type / labels / tests / docs).
- external tracker: JIRA (jira.cms.gov / confluence.cms.gov). No ticket -> use QPPA-0000.
- passport: repo row `vetted-repos.jsonl` last_checked 2026-09-30 (within `rescan_after_days` 45); re-confirmed live 2026-10-11.

## Conventions (verified from merged PRs)
- branch naming: `QPPA-XXXXX-short-description` (JIRA ticket based); `feature/...` also seen. No ticket -> `QPPA-0000-<desc>`.
- commit style: conventional commits (`docs:`, `feat:`, `fix:`, `test:`, `chore:`).
- test command: `npm test` (jest + coverage, includes lint via pretest). lint: `npm run lint` (eslint scripts index.spec.ts).
- CI checks that gate merge: GitHub Actions `build` (tsc + unit tests), SonarQube `Quality Gate`, `enforce-pr-labels` (requires `notes:*` + `version:*`).
- fork CI caveat: `pr-feature.yml` `build` starts with `aws-actions/configure-aws-credentials` (OIDC role in CMSgov's AWS account) and `sonarqube.yml` needs upstream Sonar — both go red on ANY fork PR (fork artifact, would pass upstream). Only `Enforce PR Labels` goes green on a fork PR, so treat "CI green" here as LOCAL verification (install + lint + test) plus the label job. No CLA/signup/labels gap.
- how outside PRs get merged: squash merge into `develop`; maintainers (QPPA) approve.

## Maintainer picture
- CMSgov QPPA team; PRs merged via squash into develop. Responsive (recent external merges seen).
- Recent merged PRs (2026-09-15..2026-10-09): nicholas-gates (`QPPA-12073` SonarQube exclusions 2026-10-09), chetanmunegowda (`QPPA-0000: fix build issue`, `QPPA-12100: update measure 238`, `QPPA-11949`, `QPPA-11642`), john-manack (`QPPA-12052`, `QPPA-12053`, `QPPA-12011`), brayellison (`QPPC-0000` remove suppressed cost measures), plus dependabot. Merge latency for maintainer PRs is ~1 day; external PRs also land.
- Repo size: 96 stars, 0 open issues, 0 open PRs (upstream) as of 2026-10-11. Small, data-focused, low issue traffic.

## Issue-area health
- Data-heavy repo (measures/benchmarks/mvp/clinical-clusters JSON). Docs are light (README, CONTRIBUTING, PR template, .github/copilot-instructions.md).
- No open GitHub issues at refresh time, so any pick must be self-found (repo-audit).

## Gap ledger (dedupe — READ FIRST, never re-pick)
- `2026-08-05` test-coverage getProgramNamesEnum — pr-opened-locally-verified (fork PR #1, later closed).
- `2026-08-26` test-coverage — pr-closed-ci-blocked (fork PR #3; fork CI red: Quality Gate, build, check-version-labels).
- `2026-09-10` self-found doc typos (5 typos in README/CONTRIBUTING/PR template) — pr-opened (fork PR #12, branch QPPA-0000-fix-doc-typos). Fork CI red only at AWS OIDC credential step (fork lacks upstream secrets) — fork artifact, would pass upstream; labels notes:chore + version:patch added to satisfy enforce-pr-labels.
- `2026-09-30` self-found bug: legacy benchmarks/clinical-clusters schema `$ref` parse failure — pr-opened (fork PR #22, branch QPPA-0000-fix-legacy-schema-refs). Fix + regression test, 13 files, +56/-24. Fork CI red only at OIDC step (fork artifact); labels notes:bug-fix + version:patch added (`notes:bug-fix` was created on the fork).
- `2026-10-03` self-found trivial pack: typos + stale refs across docs/comments — pr-opened (fork PR #23, branch QPPA-0000-fix-typos-and-refs). 9 docs/py/ts files. Distinct from PR #12 (different files/lines) and PR #22. Still OPEN on 2026-10-11; does NOT include the validation-command lines fixed in #24.
- `2026-10-11` self-found docs drift: `CONTRIBUTING.md` "Validation" section still documents the pre-TypeScript CLI (`cat <json> | node scripts/validate-data.js <type> <year>`), broken by commit 16bf0886 (`feat: QPPA-9026 update validation to ts`, 2024-07-16). The script is now `scripts/validate-data.ts` -> `dist/scripts/validate-data.js` and reads the JSON path as an argument, not stdin. Repro on develop (CONTRIBUTING + validate-data.ts byte-identical at fork ff58dff0 and upstream ff166ff7): documented command -> `Error: Cannot find module '<repo>/scripts/validate-data.js'`; corrected command -> `Valid for 2018 performance year schema`. Fixed CONTRIBUTING.md + scripts/validate-data.ts header/usage examples — pr-opened (fork PR #24, branch QPPA-0000-fix-validate-data-docs). Fork CI: `build` red only at the AWS OIDC step (fork artifact); `Enforce PR Labels` green; labels notes:chore + version:patch + documentation. Local: `npm ci`, `npm run lint` clean, `npm test` 306/306 pass.

## Mined gaps (discovered, not yet attempted)
- `2026-09-10` scripts/measures/README.md line 19 references `npm run build:measures <year>` but no such npm script exists (only `init:measures`/`update:measures`). Re-confirmed 2026-10-11 at ff166ff7: still no `build:measures` npm script; the file `scripts/measures/build-measures` is a wrapper that only supports PY 2018-2022 (`maxPerformanceYear=2022`) and is not wired to any npm script; `npm run build:measures` errors with npm's own suggestion `npm run init:measures`. The README section still describes the old per-year `build-<year>-measures` flow, so the intended replacement is ambiguous — status: proposed (trivial/doc type: do NOT fold into a code PR).
- `2026-10-11` validation-docs drift — status: attempted (see Gap ledger, fork PR #24). Do not re-pick.
- `2026-09-30` legacy schema `$ref` gap — status: attempted (see Gap ledger, fork PR #22). Do not re-pick.
