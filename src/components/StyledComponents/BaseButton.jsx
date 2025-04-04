function BaseButton({ className, children }) {
  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  );
}

export default BaseButton;
