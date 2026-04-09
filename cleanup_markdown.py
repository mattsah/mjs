#!/usr/bin/env python3
import re
import sys

def clean_line(line: str) -> str:
    # remove zero-width space
    line = line.replace('\u200b', '')
    # strip trailing whitespace
    line = line.rstrip()
    # strip leading whitespace
    line = line.lstrip()
    # collapse multiple spaces to single space
    line = re.sub(r' {2,}', ' ', line)
    return line

def main():
    if len(sys.argv) != 2:
        print("Usage: python cleanup_markdown.py <file>")
        sys.exit(1)
    filename = sys.argv[1]
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    new_lines = []
    for line in lines:
        cleaned = clean_line(line)
        new_lines.append(cleaned)
    # Ensure no multiple consecutive blank lines? Keep single blank lines.
    # We'll just keep as is.
    with open(filename, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines) + '\n')
    print(f"Cleaned {filename}")

if __name__ == '__main__':
    main()
