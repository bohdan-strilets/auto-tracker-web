export const NotificationMarker = () => {
  return (
    <div
      className="absolute top-[9px] right-[9px] w-[7px] h-[7px] rounded-full border-[1.5px]"
      style={{
        background: 'var(--color-accent)',
        borderColor: 'var(--color-sidebar-from)',
        boxShadow: '0 0 5px rgba(var(--color-accent-rgb), 0.45)',
      }}
    />
  );
};
