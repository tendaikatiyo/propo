import argparse
import random
from pathlib import Path


def parse_name(line: str) -> str:
    """Extract a friendly name from an email address or line."""
    text = line.strip()
    if not text:
        return ""

    if "@" in text:
        local_part = text.split("@", 1)[0]
        return local_part.replace(".", " ").replace("_", " ").title()

    return text


def pick_random_names(filename: Path, count: int = 5) -> list[str]:
    lines = [line.strip() for line in filename.read_text(encoding="utf-8").splitlines() if line.strip()]
    if not lines:
        return []

    sample_count = min(count, len(lines))
    picked_lines = random.sample(lines, sample_count)
    return [parse_name(line) for line in picked_lines]


def main() -> None:
    parser = argparse.ArgumentParser(description="Pick random names from emails.txt")
    parser.add_argument("file", nargs="?", default="emails.txt", help="Path to the emails file")
    parser.add_argument("-n", "--count", type=int, default=5, help="Number of random names to pick")
    args = parser.parse_args()

    path = Path(args.file)
    if not path.exists():
        raise FileNotFoundError(f"File not found: {path}")

    names = pick_random_names(path, args.count)
    if not names:
        print("No entries found in the file.")
        return

    print("Random selection:")
    for name in names:
        print(f"- {name}")


if __name__ == "__main__":
    main()
