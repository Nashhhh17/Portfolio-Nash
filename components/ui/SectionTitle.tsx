export default function SectionTitle({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div>
      <p style={{
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#3dd68c',
        marginBottom: '0.75rem',
      }}>
        {label}
      </p>
      <h2 style={{
        fontSize: '3.5rem',
        fontWeight: 800,
        color: '#efefef',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      }}>
        {title}
      </h2>
    </div>
  );
}