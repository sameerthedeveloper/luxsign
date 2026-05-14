export const StatsCard = ({ title, value, trend, label, icon }) => {
  const isPositive = trend > 0;
  
  return (
    <div className="bg-[var(--color-admin-surface)] rounded-2xl p-5 border border-[var(--color-admin-border)] shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-[13px] font-semibold text-[var(--color-admin-muted)] uppercase tracking-wider mb-1">
            {title}
          </h3>
          <div className="text-3xl font-bold tracking-tight text-[var(--color-admin-text)]">
            {value}
          </div>
        </div>
        <div className="p-2 bg-[#f5f5f7] rounded-lg text-[var(--color-admin-blue)]">
          {icon}
        </div>
      </div>
      
      <div className="flex items-center text-sm">
        <span className={`font-medium mr-2 flex items-center ${isPositive ? 'text-[#34c759]' : 'text-[#ff3b30]'}`}>
          {isPositive ? (
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          ) : (
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
          )}
          {Math.abs(trend)}%
        </span>
        <span className="text-[var(--color-admin-muted)]">{label}</span>
      </div>
    </div>
  );
};
