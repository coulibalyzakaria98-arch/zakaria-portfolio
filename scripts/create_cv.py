from pathlib import Path

root = Path(__file__).resolve().parents[1]
cv_dir = root / 'public' / 'cv'
cv_dir.mkdir(parents=True, exist_ok=True)

content = (
    b'BT /F1 18 Tf 72 720 Td (Coulibaly Zakaria - CV) Tj ET\n'
    b'BT /F1 12 Tf 72 690 Td (Developpeur Web, IT Consultant, Entrepreneur Digital) Tj ET\n'
    b'BT /F1 12 Tf 72 670 Td (Email: coulibalyzakaria98@gmail.com) Tj ET\n'
    b'BT /F1 12 Tf 72 650 Td (WhatsApp: +225 0556225039) Tj ET\n'
    b'BT /F1 12 Tf 72 630 Td (LinkedIn: linkedin.com/in/zakaria-coulibaly-78a9822b2) Tj ET\n'
    b'BT /F1 12 Tf 72 610 Td (GitHub: github.com/coulibalyzakaria98-arch) Tj ET\n'
)

objects = [
    b'<< /Type /Catalog /Pages 2 0 R >>',
    b'<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    b'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
    f'<< /Length {len(content)} >>\nstream\n'.encode('latin-1') + content + b'endstream',
    b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
]

pdf = bytearray(b'%PDF-1.4\n')
offsets = [0]
for index, obj in enumerate(objects, start=1):
    offsets.append(len(pdf))
    pdf += f'{index} 0 obj\n'.encode('latin-1') + obj + b'\nendobj\n'

xref_pos = len(pdf)
pdf += f'xref\n0 {len(objects) + 1}\n'.encode('latin-1')
pdf += b'0000000000 65535 f \n'
for offset in offsets[1:]:
    pdf += f'{offset:010d} 00000 n \n'.encode('latin-1')
pdf += b'trailer\n'
pdf += f'<< /Size {len(objects) + 1} /Root 1 0 R >>\n'.encode('latin-1')
pdf += f'startxref\n{xref_pos}\n%%EOF\n'.encode('latin-1')

output_path = cv_dir / 'cv-zakaria-coulibaly.pdf'
output_path.write_bytes(pdf)
print(output_path)
