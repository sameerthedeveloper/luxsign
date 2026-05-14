export const DataTable = ({ columns, data }) => {
  return (
    <div className="w-full overflow-hidden bg-[var(--color-admin-surface)] rounded-2xl border border-[var(--color-admin-border)] shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#f9f9fb] border-b border-[var(--color-admin-border)]">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-6 py-4 font-semibold text-[var(--color-admin-muted)] tracking-wider">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-admin-border)]">
            {data.map((row, i) => (
              <tr 
                key={i} 
                className="hover:bg-[#f9f9fb] transition-colors"
              >
                {columns.map((col, j) => (
                  <td key={j} className="px-6 py-4 text-[var(--color-admin-text)]">
                    {col.cell ? col.cell(row) : row[col.accessorKey]}
                  </td>
                ))}
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-6 py-8 text-center text-[var(--color-admin-muted)]">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
