#!/usr/bin/env bash
# Export the inquiries database to a local SQL file. Run from the project root:  bash scripts/backup-d1.sh
# The file contains personal data (names, emails): keep it private and never commit it.
set -euo pipefail
mkdir -p backups
out="backups/inquiries-$(date +%Y%m%d-%H%M).sql"
npx wrangler d1 export japan-jdm-inquiries --remote --output "$out"
echo "Saved $out"
