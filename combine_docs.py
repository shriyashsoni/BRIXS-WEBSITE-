import os

docs_dir = r"e:\chain\brixs chain main mwebsite\brixs_docs"
output_file = r"e:\chain\brixs chain main mwebsite\BRIXS_COMPLETE_DOCS.md"

doc_files = sorted([f for f in os.listdir(docs_dir) if f.endswith('.md')])

with open(output_file, 'w', encoding='utf-8') as outfile:
    outfile.write("# BRIXS CHAIN: COMPLETE DOCUMENTATION\n\n")
    for filename in doc_files:
        filepath = os.path.join(docs_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as infile:
            outfile.write(infile.read())
            outfile.write("\n\n---\n\n")

print(f"Successfully combined {len(doc_files)} files into {output_file}")
