#!/usr/bin/env bash

set -euo pipefail

# Pull helper with safe defaults:
# - stashes tracked/untracked changes
# - fetches latest refs and prunes deleted remote branches
# - rebases on top of remote tracking branch
# - restores stash
# - runs lightweight Git cleanup

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: run this script inside a Git repository."
  exit 1
fi

REMOTE="${1:-origin}"
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if [[ "${CURRENT_BRANCH}" == "HEAD" ]]; then
  echo "Error: detached HEAD is not supported by this script."
  exit 1
fi

if ! git remote get-url "${REMOTE}" >/dev/null 2>&1; then
  echo "Error: remote '${REMOTE}' does not exist."
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  STASH_NAME="pull.sh auto-stash $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo "Stashing local changes..."
  git stash push -u -m "${STASH_NAME}" >/dev/null
  CREATED_STASH=1
else
  CREATED_STASH=0
fi

restore_stash() {
  if [[ "${CREATED_STASH}" -eq 1 ]]; then
    echo "Restoring stashed changes..."
    if ! git stash pop --index >/dev/null; then
      echo "Warning: stash apply had conflicts. Resolve them manually."
      exit 2
    fi
  fi
}

trap restore_stash EXIT

echo "Fetching from ${REMOTE}..."
git fetch --prune "${REMOTE}"

if ! git rev-parse --verify --quiet "@{u}" >/dev/null; then
  echo "No upstream set for '${CURRENT_BRANCH}'. Setting upstream to ${REMOTE}/${CURRENT_BRANCH}..."
  git branch --set-upstream-to="${REMOTE}/${CURRENT_BRANCH}" "${CURRENT_BRANCH}" >/dev/null
fi

echo "Pulling latest changes..."
git pull --rebase "${REMOTE}" "${CURRENT_BRANCH}"

echo "Cleaning up stale remote-tracking refs..."
git remote prune "${REMOTE}" >/dev/null

echo "Running Git cleanup..."
git gc --auto >/dev/null || true

echo "Done. Branch '${CURRENT_BRANCH}' is up to date with '${REMOTE}/${CURRENT_BRANCH}'."
