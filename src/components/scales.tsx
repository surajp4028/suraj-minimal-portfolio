// The diagonal hairline rails that frame the page on both sides.
const rail =
  "absolute top-0 h-full w-4 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8";

export function Scales() {
  return (
    <>
      <div aria-hidden className={`${rail} right-0`} />
      <div aria-hidden className={`${rail} left-0`} />
    </>
  );
}
