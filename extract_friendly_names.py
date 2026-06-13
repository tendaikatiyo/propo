import argparse
from pathlib import Path


def parse_name(line: str) -> str:
    """Extract a friendly name from an email address or freeform line."""
    text = line.strip()
    if not text:
        return ""

    if "@" in text:
        local_part = text.split("@", 1)[0]
        return local_part.replace('.', ' ').replace('_', ' ').title()

    return text.title()


def main() -> None:
    parser = argparse.ArgumentParser(description='Extract friendly names from emails.txt and write them to a file.')
    parser.add_argument('-i', '--input', default='emails.txt', help='Input file path')
    parser.add_argument('-o', '--output', default='friendly_names.txt', help='Output file path')
    args = parser.parse_args()

    path = Path(args.input)
    if not path.exists():
        raise FileNotFoundError(f"Could not find {path.resolve()}")

    names = []
    with path.open(encoding='utf-8') as file:
        for raw_line in file:
            name = parse_name(raw_line)
            if name:
                names.append(name)

    out_path = Path(args.output)
    out_path.write_text('\n'.join(names) + ('\n' if names else ''), encoding='utf-8')
    print(f'Wrote {len(names)} friendly names to {out_path}')


if __name__ == '__main__':
    main()
