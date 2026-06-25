import sqlite3
from pathlib import Path

db = Path(__file__).resolve().parents[1] / "data" / "easishop.db"
conn = sqlite3.connect(db)
conn.row_factory = sqlite3.Row
cur = conn.cursor()

objs = cur.execute(
    """
    SELECT type, name FROM sqlite_master
    WHERE type IN ('table', 'view') AND name NOT LIKE 'sqlite_%'
    ORDER BY type, name
    """
).fetchall()

print("=== OBJECTS ===")
for o in objs:
    print(f"  {o['type']}: {o['name']}")

print("\n=== ROW COUNTS ===")
for o in objs:
    name = o["name"]
    cnt = cur.execute(f'SELECT COUNT(*) AS c FROM "{name}"').fetchone()["c"]
    label = "view" if o["type"] == "view" else "table"
    print(f"  {name} ({label}): {cnt:,}")

print("\n=== TABLE SCHEMAS ===")
for o in objs:
    if o["type"] != "table":
        continue
    print(f"\n-- {o['name']} --")
    for col in cur.execute(f'PRAGMA table_info("{o["name"]}")'):
        parts = [col[1], col[2] or ""]
        if col[5]:
            parts.append("PK")
        if col[3]:
            parts.append("NOT NULL")
        if col[4] is not None:
            parts.append(f"DEFAULT {col[4]}")
        print("  " + " ".join(parts))

conn.close()
